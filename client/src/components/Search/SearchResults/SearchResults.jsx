import React from 'react';
import "./SearchResults.css";
import  SearchResult from "./SearchResult/SearchResult";
import  Spinner  from "../../Spinner/Spinner"


export function SearchResults (props) {
    console.log(props.businesses);
    let searchResults = <Spinner />
    if(props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>);
    }

    return (
        <div className="search-results">
            {searchResults}
        </div>
    );
};

export default SearchResults;