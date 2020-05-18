import React from 'react';
import "./SearchResultsSum.css";

export function SearchResultsSum (props) {

    let resultStats = null;
    if (props.amountResults && props.shownResults){
        resultStats = <p>Showing 1-{props.shownResults} out of {props.amountResults} results</p>
    }
    return (
        <div className="container-search">
        <div className="search-summary">
        <h3>{props.term}<small className="text-muted">{props.location}</small></h3>
            {resultStats}
        </div>
        <div className="filters"> 
        <button className="btn btn-secondary">
            <span className="icon"><i className="fas fa-sliders-h"/></span>
            <span>All Filters</span> 
        </button> 
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">$</button>
            <button type="button" className="btn btn-secondary">$$</button>
            <button type="button" className="btn btn-secondary">$$$</button>
            <button type="button" className="btn btn-secondary">$$$$</button>
        </div>
        <button className="btn btn-secondary">
                <span className="icon"><i className="fas fa-clock"/></span>
                <span>Open Now</span> 
        </button> 
        <button className="btn btn-secondary">
                <span className="icon"><i className="fas fa-dollar-sign"/></span>
                <span>Cashback</span> 
        </button> 
        </div>
        </div>
    );
};

export default SearchResultsSum;