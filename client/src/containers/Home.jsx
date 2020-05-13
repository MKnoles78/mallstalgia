import React, { Component } from 'react';
import "./Home.css";
import logo from "../images/LogoRound.png"


class Home extends Component {

    state = {};

    render() {
        return (
            <>
            <div className="home-background">
            <div class="card"/>
            <img src={logo} className="card-img-top" alt="MallStalgia logo" id="logo"/>
            <div class="card-body"/>
            </div>
            </>
        );
    
    }
}

export default Home;