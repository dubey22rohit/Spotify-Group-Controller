import React from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
const HomePage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <p>This is the homepage</p>
        </Route>
        <Route path="/join" component={RoomJoinPage} />
        <Route path="/create" component={CreateRoomPage } />
      </Switch>
    </BrowserRouter>
  );
};
export default HomePage;
