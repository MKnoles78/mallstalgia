import React, { useState } from "react";

const Form = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [zipCode, setzipCode] = useState("");

  return (
    <form onSubmit={e => {props.handleSubmit(e, firstName, lastName, email, username, password, zipCode)}}>
        <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={firstName}
          onChange={(e) => {setFirstName(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          name="lasstName"
          value={lastName}
          onChange={(e) => {setLastName(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="username"
          className="form-control"
          name="username"
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="number"
          className="form-control"
          name="zipCode"
          value={zipCode}
          onChange={(e) => {setzipCode(e.target.value)}}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
