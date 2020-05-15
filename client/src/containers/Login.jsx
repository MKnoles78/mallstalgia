import React, { Component } from "react";
import "./Login.css";
import logo from "../images/LogoRound.png";
import Form from "../components/Login/Form";
import { Redirect } from "react-router-dom";

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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    console.log(
      "username " + this.state.username + " password " + this.state.password
    );
    this.props.setIsLoggedIn(true);
    // this.props.history.push("/retailer");
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <Redirect to="/retailer" />
        ) : (
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
                    <Form
                      username={this.state.username}
                      password={this.state.password}
                      handleInputChange={this.handleInputChange}
                      handleSubmit={this.handleSubmit}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Login;
