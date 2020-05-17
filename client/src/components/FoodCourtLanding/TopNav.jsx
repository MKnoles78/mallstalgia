import React from "react";
import "./TopNav.module.css"


export function TopNav () {
    return(
        <div>
            <div>
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div>
                <span>Login</span>
                <button className="button">SignUp</button>
            </div>

        </div>

    )
}

export default TopNav