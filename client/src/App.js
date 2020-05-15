import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Foodcourt from "./containers/Foodcourt";
import Looks from "./containers/Looks";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Retailer from "./containers/Retailer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/login"
        component={() => (
          <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        )}
      />
      <Route exact path="/register" component={Register} />
      <Route exact path="/looks" component={Looks} />
      {/* <Route exact path="/retailer" component={Retailer} /> */}
      <Route
        exact
        path="/retailer"
        component={() => (
          <Retailer isLoggedIn={isLoggedIn} />
        )}
      />
      <Route exact path="/foodcourt" component={Foodcourt} />
    </Router>
  );
}

export default App;
