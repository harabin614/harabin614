import * as actionTypes from "./actionTypes";
import axios from "axios";

const initChatSuccess = data => {
  return {
    type: actionTypes.INIT_CHAT,
    messages: data
  };
};
export const initChat = () => {
  return dispatch => {
    const messagesU1 = [];
    const messagesU2 = [];
    axios.get("https://chat-73ffd.firebaseio.com/messages.json").then(res => {
      if (res.data) {
        for (let key in res.data) {
          if (res.data[key].user === "user1") {
            messagesU1.push(res.data[key].message);
          } else {
            messagesU2.push(res.data[key].message);
          }
        }
        dispatch(initChatSuccess({ messagesU1, messagesU2 }));
      }
    });
  };
};

export const logUser = user => {
  return {
    type: actionTypes.LOG_USER,
    userId: user
  };
};
export const sendMsgSuccess = () => {
  return { type: actionTypes.SEND_MSG_SUCCESS };
};
export const sendMessage = (user, message) => {
  return dispatch => {
    axios
      .post("https://chat-73ffd.firebaseio.com/messages.json", {
        user: user,
        message: message
      })
      .then(res => {
        dispatch(sendMsgSuccess());
      });
  };
};
