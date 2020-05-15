import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input
          type="username"
          className="form-control"
          name="username"
          value={props.username}
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input 
          type="password"
          className="form-control"
          name="password"
          value={props.password}
          onChange={props.handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
