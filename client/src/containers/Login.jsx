import React, { Component } from "react";
import "./Login.css";
import logo from "../images/LogoRound.png";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    return (
      <>
      <div container>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <div className="card">
                <img
                  src={logo}
                  className="card-img-top"
                  alt="MallStalgia logo"
                />
                <div className="card-body">
                  <form>
                    <div className="form-group" id="username">
                      <label for="username">Username</label>
                      <input
                        type="username"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default Login;
