import React from 'react';
import FoodNav from '../NavBar/FoodNav';
import SubFoodNav from '../NavBar/SubNav/SubFoodNav';
import SearchResultsSum from './SearchResultsSum/SearchResultsSum';
import SearchResults from './SearchResults/SearchResults';



export function Search (){
    return (
        <div>
            <FoodNav />
            <SubFoodNav />
            <SearchResultsSum />
            <SearchResults />
        </div>
    )
};

export default Search;