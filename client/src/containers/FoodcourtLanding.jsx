import React from "react";
import TopNav from "../components/FoodCourtLanding/TopNav";
import icon from "../images/Icon.png"
import "./FoodcourtLanding.css"
import FoodcourtSearch from "../components/FoodcourtSearch/FoodcourtSearch";
import FoodSuggestion from "../components/FoodSuggestion/FoodSuggestion";
import useReactRouter from "use-react-router";


export function FoodcourtLanding (){

    const {history} = useReactRouter()

    function search (term, location){
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);

    }
    return (
    <div className="landing">
    <div className="search-food">
       <TopNav/>
       <img src={icon} className="icon" alt="logo"/>
       <FoodcourtSearch search={search}/>
       <FoodSuggestion />
    </div>
    </div>
    )

}


export default FoodcourtLanding
