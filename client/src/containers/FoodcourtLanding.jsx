import React from "react";
import TopNav from "../components/FoodCourtLanding/TopNav";
import icon from "../images/Icon.png"
import "./FoodcourtLanding.css"
import FoodcourtSearch from "../components/FoodcourtSearch/FoodcourtSearch";
import FoodSuggestion from "../components/FoodSuggestion/FoodSuggestion";

export function FoodcourtLanding (){
    return (
    <div>
       <TopNav/>
       <img src={icon} className="icon" alt="logo"/>
       <FoodcourtSearch />
       <FoodSuggestion />
    </div>
    )

}


export default FoodcourtLanding
