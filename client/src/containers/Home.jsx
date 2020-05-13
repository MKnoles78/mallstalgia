import React, { Component } from 'react';
import "./Home.css";
import logo from "../images/LogoRound.png"


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