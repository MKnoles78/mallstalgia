import React from 'react';
import FoodNav from '../NavBar/FoodNav';
import SubFoodNav from '../NavBar/SubNav/SubFoodNav';
import SearchResultsSum from './SearchResultsSum/SearchResultsSum';
import SearchResults from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';



export function Search (){

    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc')

    return (
        <div>
            <FoodNav term={term} location={locationParam}/>
            <SubFoodNav />
            <SearchResultsSum  term={term} location={locationParam}/>
            <SearchResults />
        </div>
    )
};

export default Search;