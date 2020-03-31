import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";

const User1 = props => {
  let user = null;
  const [message, setMessage] = useState("");
  const messages = useSelector(state => state.messages);
  const msg = useSelector(state => state.msg);
  let rendMsg = null;
  const dispatch = useDispatch();
  const sendMsg = () => {
    dispatch(actions.sendMessage("user2", message));
  };
  useEffect(() => {
    dispatch(actions.initChat());
    console.log("initChat");
  }, [msg]);

  if (messages) {
    console.log(messages);
    let i = 0;
    rendMsg = messages.messagesU1.map(msg => {
      i = i + 1;
      return <p key={i}>{msg}</p>;
    });
  }
  if (props.active) {
    user = (
      <div>
        <p>Welcome to the chat user1</p>
        {rendMsg}
        <textarea
          value={message}
          onChange={event => setMessage(event.target.value)}
        ></textarea>
        <Button onClick={sendMsg}></Button>
      </div>
    );
  }
  return user;
};

export default User1;
