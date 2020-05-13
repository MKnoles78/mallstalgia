import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
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
                <div className="card-body">
                    <h3>Create an account</h3>
                  <form>
                    <div className="form-group" id="firstname">
                      <label for="firstname">First Name</label>
                      <input type="firstname" className="form-control" />
                    </div>
                    <div className="form-group" id="lastname">
                      <label for="lastName">Last Name</label>
                      <input type="lastname" className="form-control" />
                    </div>
                    <div className="form-group" id="username">
                      <label for="username">Username</label>
                      <input type="username" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label for="zipcode">Zip Code</label>
                      <input type="zipcode" className="form-control" />
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

export default Register;
