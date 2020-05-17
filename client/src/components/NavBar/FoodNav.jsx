import React from 'react';
import logo from '../../images/Icon.png';
import "./FoodNav.css";
import FoodcourtSearch from "../FoodcourtSearch/FoodcourtSearch"


export function FoodNav (props) {
    return (
        <div className="food-nav" >
            <div className="searchComponents">
            <img src={logo} className="foodlogo" alt="logo" />
            <FoodcourtSearch small term={props.term} location={props.location}/>
            <button className="foodNavButton">Sign In</button>
            <button className="foodNavButton">Register</button>
            </div>            
        </div>
    );
};

export default FoodNav;