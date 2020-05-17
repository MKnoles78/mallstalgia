import React from 'react';
import "./SearchResult.css"

export function SearchResult () {
    return (
        <div>
        <div className="result">
            <img src="https://via.placeholder.com/210" alt="business" className="business-image"/>
            <div className="business-info">
            <h2><small className="text-muted">Burger Place</small></h2>
            <h4><small className="text-muted">Rating</small></h4>
            <p><small className="text-muted">$$ <span>
                <button type="button" className="btn btn-outline-secondary btn-sm">burgers</button> 
                </span>  <span>
                <button type="button" className="btn btn-outline-secondary btn-sm">burgers</button>
                </span>
            </small></p>
            </div>
            <div className="contact-info">
            <p>Phone Number</p>
            <p>Address</p>
            <p>City, State</p>
            <p>Zip Code</p>

            </div>
        </div>
        </div>
    );
};

export default SearchResult;