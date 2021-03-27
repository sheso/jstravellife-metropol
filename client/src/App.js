import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from './components/Main';
import Services from './components/Services/Services';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/SignIn">
              <SignIn />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>          
            <Route path='/services'>
              <Services />
            </Route>
            <Route path="/">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
