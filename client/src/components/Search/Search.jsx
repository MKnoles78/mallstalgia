import React from 'react';
import FoodNav from '../NavBar/FoodNav';
import SubFoodNav from '../NavBar/SubNav/SubFoodNav';
import SearchResults from './SearchResults/SearchResults'


export function Search (){
    return (
        <div>
            <FoodNav />
            <SubFoodNav />
            <SearchResults />
        </div>
    )
};

export default Search;