import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Button } from "react-bootstrap";

const User2 = props => {
  const [message, setMessage] = useState("");

  const messages = useSelector(state => state.messages);
  const msg = useSelector(state => state.msg);
  let rendMsg = null;
  const dispatch = useDispatch();
  const sendMsg = () => {
    dispatch(actions.sendMessage("user1", message));
  };
  useEffect(() => {
    dispatch(actions.initChat());
    console.log("initChat");
  }, [msg]);

  let user = null;
  if (messages) {
    console.log(messages);
    let i = 0;
    rendMsg = messages.messagesU2.map(msg => {
      i = i + 1;
      return <p key={i}>{msg}</p>;
    });
  }
  if (props.active) {
    user = (
      <div>
        <p>Welcome to the chat user2</p>
        <div>{messages ? rendMsg : null}</div>
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

export default User2;
