import React, { Component } from "react";
import "./Login.css";
import logo from "../images/LogoRound.png";
import Form from "../components/Login/Form";
import jwt from "jsonwebtoken";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      error: "",
    });
  };

  handleSubmit = (event, username, password) => {
    event.preventDefault();
    console.log("username " + username + " password " + password);
    axios.post("/api/auth", {
      username,
      password,
    })
      .then(async (response) => {
        console.log(response.data.success);
        console.log(response.data.data)
        if (response.data.success) {
          const decoded = jwt.verify(
            response.data.data,
            "carolbaskinkilledherhusband"
          );
          console.log(decoded);
          await sessionStorage.setItem("jwt", response.data.data);
          await this.props.history.push(`/looks`);
        }
      })
      .catch((err) => {
        console.log(err)
        console.log(err.data);
        this.setState({ error: err.name });
      });
  };


  render() {
    return (
      <>
        <div className="container">
          {this.state.error && (
            <div
              className="row"
              id="alert"
              style={{ backgroundColor: "#FE6D73", paddingTop: "2" }}
            >
              <div
                className="col"
                style={{ textAlign: "center", float: "none" }}
              >
                <p style={{ color: "#ffffff" }}>{this.state.error}</p>
              </div>
            </div>
          )}
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
                    handleSubmit={this.handleSubmit}
                    handleInputChange={this.handleInputChange}
                    username={this.state.username}
                    password={this.state.password}
                  />
                  <Link to="register" style={{ color: "#FFF" }}>
                    Need to create an account?
                  </Link>
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
