import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User1 from "../Users/User1/User1";
import User2 from "../Users/User2/User2";
import * as actions from "../../store/actions/index";

const ChatRoom = () => {
  const user = useSelector(state => state.user);
  const [user1, setUser1] = useState(false);
  const [user2, setUser2] = useState(false);
  console.log(user);

  useEffect(() => {
    if (user === 1) {
      setUser1(true);
    } else if (user === 2) {
      setUser2(true);
    }
  }, [user]);

  return (
    <div
      style={{
        width: "70%",
        height: "60vh",
        border: "2px solid black",
        margin: "100px auto"
      }}
    >
      <h2>This is Chat Room</h2>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid black",
          position: "relative"
        }}
      >
        <div
          style={{
            width: "50%",
            borderRight: "1px solid black",
            minHeight: "55vh"
          }}
        >
          <User1 active={user1} />
        </div>
        <div
          style={{
            width: "50%",
            borderLeft: "1px solid black",
            minHeight: "55vh"
          }}
        >
          <User2 active={user2} />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
