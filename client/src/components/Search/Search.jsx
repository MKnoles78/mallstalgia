import React from 'react';
import FoodNav from '../NavBar/FoodNav';
import SubFoodNav from '../NavBar/SubNav/SubFoodNav';
import SearchResultsSum from './SearchResultsSum/SearchResultsSum';
import SearchResults from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';
import {useBusinessSearch} from '../../utils/hooks/YelpAPI/useBusinessSearch';



export function Search (){

    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);



    const {history} = useReactRouter();

    if (!term || !locationParam) {
        history.push("/");
    }

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
        setSearchParams({term, location});

    }

    return (
        <div>
            <FoodNav term={term} location={locationParam} search={search}/>
            <SubFoodNav />
            <SearchResultsSum   term={searchParams.term} 
                                location={searchParams.location} 
                                amountResults={amountResults} 
                                shownResults={businesses ? businesses.length : 0}
            />
            <SearchResults businesses={businesses}/>
        </div>
    )
};

export default Search;