import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  state = {
    // firstName: "",
    // lastName: "",
    // username: "",
    email: "",
    password: "",
    // zipCode: "",
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

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
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={this.state.email}
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
                    {/* <div className="form-group" id="lastname">
                      <label>Last Name</label>
                      <input
                        type="lastName"
                        className="form-control"
                        name=""
                        value={}
                        onChange={}
                      />
                    </div>
                    <div className="form-group" id="username">
                      <label>Username</label>
                      <input
                        type="username"
                        className="form-control"
                        name=""
                        value={}
                        onChange={}
                      />
                    </div>
                    <div className="form-group">
                      <label>E-mail</label>
                      <input
                        type="email"
                        className="form-control"
                        name=""
                        value={}
                        onChange={}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name=""
                        value={}
                        onChange={}
                      />
                    </div>
                    <div className="form-group">
                      <label>Zip Code</label>
                      <input
                        type="zipCode"
                        className="form-control"
                        name=""
                        value={}
                        onChange={}
                      />
                    </div> */}
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
