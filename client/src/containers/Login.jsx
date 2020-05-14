import React, { Component } from "react";
import "./Login.css";
import logo from "../images/LogoRound.png";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="username"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
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

