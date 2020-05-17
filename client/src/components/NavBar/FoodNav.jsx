import React from 'react';
import logo from '../../images/Icon.png';
import "./FoodNav.css";
import FoodcourtSearch from "../FoodcourtSearch/FoodcourtSearch"


export function FoodNav () {
    return (
        <div className="food-nav" >
            <div className="searchComponents">
            <img src={logo} className="foodlogo" alt="logo" />
            <FoodcourtSearch />
            <button className="foodNavButton">Sign In</button>
            <button className="foodNavButton">Register</button>
            </div>            
        </div>
    );
};

export default FoodNav;