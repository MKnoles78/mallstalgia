import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Foodcourt from "./containers/Foodcourt";
import Looks from "./containers/Looks";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Retailer from "./containers/Retailer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./containers/NotFound";
import FoodcourtLanding from "./containers/FoodcourtLanding";
import Search from "./components/Search/Search";

function App() {
  const [userObject, setUserObject] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkForToken();
  }, []);

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

  const logOutUser = () => {
    setUserObject({});
    setIsLoggedIn(false);
    sessionStorage.setItem("jwt", "");
  };

  return (
    <>
      <Router>
        <NavBar
          isLoggedIn={isLoggedIn}
          logOutUser={logOutUser}
          userObject={userObject}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
              />
            )}
          />
          <Route
            path="/register"
            render={(props) => (
              <Register {...props}/>
            )}
          />
          <Route
            path={["/looks"]}
            render={(props) => <Looks {...props} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path={["/retailer"]}
            render={(props) => <Retailer {...props} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path={["/foodcourt"]}
            render={(props) => <Foodcourt {...props} isLoggedIn={isLoggedIn} />}
          />
          <Route path={["*"]}>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
