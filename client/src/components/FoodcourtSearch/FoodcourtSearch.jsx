import React from 'react';
import "./FoodcourtSearch.css"

function FoodcourtSearch (){
    return (
        <div>
            <div className="input-group mb-3" id="foodinput">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
            </div>
            <input type="text" className="form-control" placeholder="burgers, tacos, pizza..." aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">NEAR</button>
            </div>
            <input type="text" className="form-control" placeholder="Where" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            <div className="button"><i className="fas fa-search"></i></div>
            </div>
        </div>
    );
};

export default FoodcourtSearch;