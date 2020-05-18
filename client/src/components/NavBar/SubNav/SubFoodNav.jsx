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
        </div>
    );
};

export default SubFoodNav;