import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Services from "./components/Services/Services";
import Chat from "./components/Chat";
import BottomNav from "./components/BottomNav";
import SpeedDials from "./components/SpeedDials";
import Profile from './components/Profile';
import './index.css';

function App() {
  return (
    <div className="App">
      <div>
        <SpeedDials />

        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
          </Switch>

          <div
            style={{
              position: 'fixed',
              bottom: '0px',
              left: '0px',
            }}
          >
            <BottomNav />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
