import React, { Component } from "react";
import "./Login.css";
import logo from "../images/LogoRound.png";
import Form from "../components/Login/Form"

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
  console.log (this.state.username + " " + this.state.password)
}

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
                  <Form username={this.state.username} password={this.state.password} handleInputChange={this.handleInputChange}/>
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

