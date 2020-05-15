import React, { Component } from "react";
import "./Register.css";
import Form from "../components/Register/Form";

class Register extends Component {

<<<<<<< HEAD
    state = {
        
    };
    
    render() {
        return (
            <div id="register-background">
                
=======
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (
    event,
    firstName,
    lastName,
    email,
    username,
    password,
    zipCode
  ) => {
    event.preventDefault();
    console.log(
      "first name " +
        firstName +
        " last name " +
        lastName +
        " email " +
        email +
        " username " +
        username +
        " password " +
        password +
        " zip code " +
        zipCode
    );
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
>>>>>>> origin/master
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
