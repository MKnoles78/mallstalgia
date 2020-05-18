import React from 'react';
import SubNavComp from './SubNavComp/SubNavComp'
import './SubFoodNav.css'

export function SubFoodNav() {
    return (
        <div className="subNav">    
            <SubNavComp lable="Restaurant" icon="fa-utensils"/>
            <SubNavComp lable="Home Services" icon="fa-house-user"/>
            <SubNavComp lable="Auto Services" icon="fa-car"/>
            <SubNavComp lable="More" icon="fa-info-circle"/>
            <button className="review-button">
                <span className="icon"><i className="fas fa-pen"/></span>
                <span>Write a Review</span> 
            </button>  
            <button className="review-button">
                <span className="icon"><i className="fas fa-store"/></span>
                <span>For Businesses</span> 
            </button> 

        </div>
    );
};

export default SubFoodNav;