import React from 'react';
import "./NavBar.css";
// import { Link } from "react-router-dom"

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/login">Login <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/retailer">Retail</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/foodcourt">Food Court</a>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;