import React from 'react';
import "./SearchResults.css";
import { SearchResult } from "./SearchResult/SearchResult"

export function SearchResults (props) {

    if(!props.businesses || !props.businesses.length) {
        return (<div></div>);
    }

    const searchResults = props.businesses.map(b => <SearchResult key={b.id} businesses={b}/>)
    return (
        <div className="search-results">
            {searchResults}
        </div>
    );
};

export default SearchResults;