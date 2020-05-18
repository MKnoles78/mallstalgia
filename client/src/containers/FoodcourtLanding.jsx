import React from "react";
import icon from "../images/LogoRound.png"
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
    <div className="foodcourt-background">
    <div className="landing">
    <div className="search-food">
       <img src={icon} className="icon" alt="logo"/>
       <div id="suggestions"><FoodSuggestion /></div>
       <FoodcourtSearch search={search}/>
      
    </div>
    </div>
    </div>
    )

}


export default FoodcourtLanding
