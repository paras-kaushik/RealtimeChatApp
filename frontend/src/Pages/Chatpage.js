import { Box } from "@chakra-ui/layout";
import { useState } from "react";

import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import HeaderAndSideDrawer from "../components/ChatpageComponents/HeaderAndSideDrawer";

import { ChatState } from "../Context/ChatProvider";
import { background } from "@chakra-ui/react";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();// FETCHING THE REQUIRED STATE FROM CONTEXT API

  return (
    <div className="chatpage-container">
      {user && <HeaderAndSideDrawer />}
      <div className="chatpage-content-container">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </div>
    </div>
  );
};

export default Chatpage;
