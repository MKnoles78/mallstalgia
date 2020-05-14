import React, { useState } from "react";

const Form = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={e => {props.handleSubmit(e, username, password)}}>
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
