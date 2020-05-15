import React, { Component } from "react";
import "./Login.css";
import logo from "../images/LogoRound.png";
import Form from "../components/Login/Form";
import jwt from "jsonwebtoken";
import Axios from "axios";
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
    Axios.post("/api/auth", {
      username,
      password,
    })
      .then(async (response) => {
        console.log(response.data.data);
        if (response.data.success) {
          const decoded = await jwt.verify(
            response.data.data,
            process.env.REACT_APP_SECRET_KEY
          );
          console.log(decoded);
          await sessionStorage.setItem("jwt", response.data.data);
          await this.props.checkForToken();
          await this.props.history.push(`//${decoded.id}`);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ error: err.response.data.message });
      });
  };

  render() {
    return (
      <>
        <div className="container">
          {this.state.error && (
          <div className="row" id ="alert" style={{backgroundColor: "#FE6D73", paddingTop: "2"}}>
            <div className="col" style={{textAlign: "center", float: "none"}}>
            <p style={{color: "#ffffff"}}>{this.state.error}</p>
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
                  <Form handleSubmit={this.handleSubmit} />
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
