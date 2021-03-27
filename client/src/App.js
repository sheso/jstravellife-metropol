import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from './components/Main';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
