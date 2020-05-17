import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./containers/Home";
import Foodcourt from "./containers/Foodcourt";
import Looks from "./containers/Looks";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Retailer from "./containers/Retailer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./containers/NotFound";
import PrivateRoute from "./components/App/PrivateRoute";
require("dotenv").config();


function App(props) {
  const [userObject, setUserObject] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const checkForToken = async () => {
  const tokenFromStorage = await sessionStorage.getItem("jwt");
  if (tokenFromStorage) {
    setIsLoggedIn(true);
    try {
      const decoded = await jwt.verify(
        tokenFromStorage,
        process.env.REACT_APP_SECRET_KEY
      );
      if (decoded && decoded.username && decoded.id) {
        setUserObject(decoded);
        setIsLoggedIn(true);
        props.history.push(`/looks/decoded.id`)
      }
    } catch (e) {
      setUserObject({});
      setIsLoggedIn(false);
      sessionStorage.setItem("jwt", "");
      console.error(e);
    }
  }
};

  useEffect(() => {
    checkForToken();
  }, []);


  return (
    <>
      <Router>
        <NavBar isLoggedIn={isLoggedIn} userObject={userObject} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} checkForToken={checkForToken} />
            )}
          />
          <Route
            path="/register"
            render={(props) => (
              <Register {...props} checkForToken={checkForToken} />
            )}
          />
          <PrivateRoute
            path="/looks/:id"
            render={(props) => <Looks {...props} />}
          />
          <Route
            path="/retailer/:id"
            render={(props) => <Retailer {...props} />}
          />
          <PrivateRoute
            path="/foodcourt/:id"
            render={(props) => <Foodcourt {...props} />}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
 }

export default App;
