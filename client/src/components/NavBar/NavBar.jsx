import React from 'react';
import "./NavBar.css";
import { NavLink } from "react-router-dom";  

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbarMain">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" id="navLink" activeStyle={{color: "pink"}}>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link" id="navLink" activeStyle={{color: "pink"}}>Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/retailer" className="nav-link" id="navLink" activeStyle={{color: "pink"}}>Retail</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/foodcourt" className="nav-link" id="navLink" activeStyle={{color: "pink"}}>Food Court</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;