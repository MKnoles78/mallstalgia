import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import PrivateRoute from "./components/App/PrivateRoute";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./containers/Home";
import Foodcourt from "./containers/Foodcourt";
import Looks from "./containers/Looks";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Retailer from "./containers/Retailer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./containers/NotFound";


function App(props) {
  const [userObject, setUserObject] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkForToken();
  }, []);

  const logOutUser = () => {
    setUserObject({});
    setIsLoggedIn(false);
    sessionStorage.setItem("jwt", "");
  };

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
      }
    } catch (e) {
      setUserObject({});
      setIsLoggedIn(false);
      sessionStorage.setItem("jwt", "");
      console.error(e);
    }
  }
};


  return (
    <>
      <BrowserRouter>
        <NavBar/>
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
          <PrivateRoute path="/looks/:id" render={(props) => <Retailer {...props} />} />
          <Route
            path="/looks/:id"
            render={(props) => <Retailer {...props} />}
          />
          <PrivateRoute path="/foodcourt/:id"
            render={(props) => <Foodcourt {...props} />}
          /> 
            {/* <Route path="/looks">
            <Looks />
            </Route>
            <Route path="/foodcourt">
            <Foodcourt />
            </Route> */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
 }

export default App;
