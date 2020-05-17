import React from 'react';

const FoodInput = (props) => {
    return (
        <div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" for="defaultCheck1">
                {props.cuisine}
            </label>
        </div>    
        </div>
    );
};

export default FoodInput;