import React from 'react';
import "./FoodNav.css";
import FoodcourtSearch from "../FoodcourtSearch/FoodcourtSearch"


export function FoodNav (props) {
    return (
        <div className="food-nav" >
            <div className="searchComponents">
            <FoodcourtSearch  term={props.term}  location={props.location} search={props.search}/>
            </div>            
        </div>
    );
};

export default FoodNav;