import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import Main from './components/Main';
// import Services from './components/Services/Services';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
			{/* <Main />
      <Services/> */}
      <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
    </div>
  );
}

export default App;
