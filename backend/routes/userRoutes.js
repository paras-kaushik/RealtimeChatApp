const express = require("express");
const {
  registerUser,
  authenticateUser,
  getUsersByNameEmailOrId,
} = require("../controllers/userControllers");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();
///api/user routes...
//router.route("/").get(authenticate, getUsersByNameEmailOrId);// get all users
//router.route("/").post(registerUser);//sign up
//(above)syntax for multiple middleware functions or route handlers(controllers) to a single route path for different HTTP methods.

router.route("/").post(registerUser).get(authenticate, getUsersByNameEmailOrId);

router.post("/login", authenticateUser);

module.exports = router;
