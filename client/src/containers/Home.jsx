import React, { Component } from 'react';
import "./Home.css";
import logo from "../images/LogoRound.png"

// import { Link } from "react-router-dom";

class Home extends Component {

    state = {};

    render() {
        return (
        
            <div className="home-background">
                <div className="logo">
                <img src={logo} className="logo" alt="MallStalgia logo" id="logo"/>  
                </div>
            </div>
        );
    }
}

export default Home;