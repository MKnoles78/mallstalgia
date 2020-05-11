import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return <>
  <BrowserRouter>
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
    </Switch>
  </BrowserRouter>
  </>
 
}

export default App;
