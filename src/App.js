import React from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import RoomLogIn from "./components/RoomLogIn/RoomLogIn";
import ChatRoom from "./components/ChatRoom/ChatRoom";

function App() {
  let routes = (
    <Switch>
      <Route path="/chatroom" component={ChatRoom} />
      <Route path="/" component={RoomLogIn} />
    </Switch>
  );
  return <div className="App">{routes}</div>;
}

export default withRouter(App);
