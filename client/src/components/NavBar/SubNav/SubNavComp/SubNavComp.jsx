import React from 'react';
import './SubNavComp.css'

export function SubNavComp (props) {
    return (
        <div>
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className={`fas ${props.icon}`}/><span>{props.lable}</span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button">Action</button>
                <button class="dropdown-item" type="button">Another action</button>
                <button class="dropdown-item" type="button">Something else here</button>
            </div>
            </div>
        </div>
    );
};

export default SubNavComp;