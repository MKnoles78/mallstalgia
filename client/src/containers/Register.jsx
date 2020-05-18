import React, { Component } from "react";
import Axios from "axios";
import "./Register.css";
import Form from "../components/Register/Form";
import jwt from "jsonwebtoken";

class Register extends Component {
  state = {
    event: "",
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    zipcode: "",
    error: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      error: "",
    });
  };

  handleSubmit = (event, fname, lname, email, username, password, zipcode) => {
    event.preventDefault();
    Axios.post("/api/user", {
      fname,
      lname,
      email,
      username,
      password,
      zipcode,
    })
      .then(async (response) => {
        console.log(response.data.data);
        if (response.data.success) {
          const decoded = await jwt.verify(
            response.data.data,
            "carolbaskinkilledherhusband"
          );
          console.log(decoded);
          sessionStorage.setItem("jwt", response.data.data);
          await this.props.checkForToken();
          await this.props.history.push(`/looks/${decoded.id}`);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        this.setState({ error: err.response });
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
                <div className="card-body">
                  <h3>Create an account</h3>
                  <Form handleSubmit={this.handleSubmit} />
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

export default Register;
