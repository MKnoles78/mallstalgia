import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Foodcourt from "./containers/Foodcourt";
import Looks from "./containers/Looks";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Retailer from "./containers/Retailer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./containers/NotFound";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/looks" component={Looks} />
      <Route exact path="/retailer" component={Retailer} />
      <Route exact path="/foodcourt" component={Foodcourt} />
      <Route exact path="*" component={NotFound} />
    </Router>
  );
}

export default App;
