import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  messages: null,
  msg: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CHAT:
      return {
        ...state,
        messages: action.messages
      };
    case actionTypes.LOG_USER:
      return {
        ...state,
        user: Number(action.userId)
      };
    case actionTypes.SEND_MSG_SUCCESS:
      return {
        ...state,
        msg: !state.msg
      };
    default:
      return state;
  }
};
export default reducer;
