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
                    <div className="form-group" id="login-background">
                      <label for="exampleInputEmail1">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <small
                        id="emailHelp"
                        className="form-text text-muted"
                      ></small>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
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
      </>
    );
  }
}

export default Login;
