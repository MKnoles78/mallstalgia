import React from "react";
import "./TopNav.css";


export function TopNav () {
    return(
        <div className="foodNav">
            <div className="left">
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div className="right">
                <span>Login </span>
                <button className="foodButton">SignUp</button>    
            </div>

        </div>

    )
}

export default TopNav