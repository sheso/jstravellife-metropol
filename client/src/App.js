import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./components/Main";
import Services from "./components/Services/Services";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
