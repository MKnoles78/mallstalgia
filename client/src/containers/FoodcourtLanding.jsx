import React from "react";
import TopNav from "../components/FoodCourtLanding/TopNav";
import icon from "../images/Icon.png"
import "./FoodcourtLanding.css"
import FoodcourtSearch from "../components/FoodcourtSearch/FoodcourtSearch";

export function FoodcourtLanding (){
    return (
    <div>
       <TopNav/>
       <img src={icon} className="icon" alt="logo"/>
       <FoodcourtSearch />
    </div>
    )

}


export default FoodcourtLanding
