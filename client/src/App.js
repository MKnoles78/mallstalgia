import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./containers/Home";
import Foodcourt from "./containers/Foodcourt";
import Looks from "./containers/Looks";
import Register from "./containers/Register";
import Signup from "./containers/Signup";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return <>
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        Home
      </Route>
      <Route exact path="/signup">
        Signup
      </Route>
      <Route exact path="/register">
        Register
      </Route>
      <Route exact path="/looks">
        Looks
      </Route>
      <Route exact path="/retailer">
        Retailer
      </Route>
      <Route exact path="/foodcourt">
        Foodcourt
      </Route>
      <Route exact path="*">
        NotFound
      </Route>
    </Switch>
  </BrowserRouter>
  </>
 
}

export default App;
