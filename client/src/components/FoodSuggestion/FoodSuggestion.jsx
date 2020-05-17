import React from 'react';
import "./FoodSuggestion.css"

function FoodSuggestion () {
    return (
        <div className="suggestions">
            <div className="button"><i className="fas fa-utensils"></i>Restaurants</div>
            <div className="button"><i className="fas fa-cocktail"></i>Nightlife</div>
            <div className="button"><i className="fas fa-concierge-bell"></i>Services</div>
            <div className="button"><i className="fas fa-truck"></i>Delivery Services</div>
        </div>
    );
};

export default FoodSuggestion;