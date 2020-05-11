import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./containers/Home";
import Foodcourt from "./containers/Foodcourt";
import Looks from "./containers/Looks";
import Register from "./containers/Register";
import Login from "./containers/Login";
<<<<<<< HEAD
=======
import Retailer from "./containers/Retailer";
>>>>>>> c764d13dae9fe6fdf6fbb9ff44244764e9d29eae
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./containers/NotFound";

function App() {
  return <>
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/register">
        <Register/>
      </Route>
      <Route exact path="/looks">
        <Looks/>
      </Route>
      <Route exact path="/retailer">
        <Retailer/>
      </Route>
      <Route exact path="/foodcourt">
        <Foodcourt/>
      </Route>
      <Route exact path="*">
        <NotFound/>
      </Route>
    </Switch>
  </BrowserRouter>
  </>
 
}

export default App;
