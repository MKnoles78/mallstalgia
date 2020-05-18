import React, { useState } from "react";

const Form = (props) => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [zipcode, setzipcode] = useState("");

  return (
    <form
      onSubmit={(e) => {
        props.handleSubmit(e, fname, lname, email, username, password, zipcode);
      }}
    >
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          name="fname"
          value={fname}
          onChange={(e) => {
            setfname(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          name="lname"
          value={lname}
          onChange={(e) => {
            setlname(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="username"
          className="form-control"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="number"
          className="form-control"
          name="zipcode"
          value={zipcode}
          onChange={(e) => {
            setzipcode(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
