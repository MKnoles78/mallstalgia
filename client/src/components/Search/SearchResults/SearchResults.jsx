import React from 'react';
import "./SearchResults.css";
import SearchResult from "./SearchResult/SearchResult"

export function SearchResults () {
    return (
        <div className="search-results">
            <SearchResult />
            <SearchResult />
        </div>
    );
};

export default SearchResults;