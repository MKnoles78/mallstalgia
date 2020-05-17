import React from 'react';
import logo from '../../images/Icon.png';
import "./FoodNav.css";
import FoodcourtSearch from "../FoodcourtSearch/FoodcourtSearch"


export function FoodNav () {
    return (
        <div className="food-nav" >
            <img src={logo} className="foodlogo" alt="logo" />
            <FoodcourtSearch />
            <button className="button">Sign In</button>;
            <button className="button">Register</button>;
        </div>
    );
};

export default FoodNav;