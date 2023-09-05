const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

//@description     Register new user
//@route           POST /api/user/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;// need express.json middleware for this body to form

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });//https://mongoosejs.com/docs/queries.html

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({// https://mongoosejs.com/docs/models.html
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),// JWT TOKEN IS SENT BACK BUT NOT STORED ON THE BACKEND
    });
  } else {
    res.status(500);
    throw new Error("Failed to create user");
  }
});

//@description     Auth the user
//@route           POST /api/user/login
//@access          Public
const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {// matchPassword is a custom shcema method- its decrypted and compared
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),// Each time user logs in a new token is generated
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Get or Search all users by name or email
//@route           GET /api/user?search=
//@access          Public
// /api/user?search=par&lastname=aggarwal
const getUsersByNameEmailOrId = asyncHandler(async (req, res) => {
  const keyword = req.query.search// instead of making this POST( using req.body) we use query params
    ? {
      $or: [
        { name: { $regex: req.query.search, $options: "i" } },// options is for case sensitivity
        { email: { $regex: req.query.search, $options: "i" } },
      ],
    }
    : {};
// we want all search results but NOT user currently logged in
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });// ne ->notEqual to
  // also req.user._id can only be fetched for authorised user
  res.send(users);
});

module.exports = { getUsersByNameEmailOrId, registerUser, authenticateUser };
