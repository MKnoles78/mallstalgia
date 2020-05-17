import React, {useState} from 'react';
import "./FoodcourtSearch.css"

export function FoodcourtSearch (props){

    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location)

        }
        console.log(term,location)
        e.preventDefault();
    }
    
    return (
        <form onSubmit={submit}>
        <div className="outer-foodinput">
            <div className="input-group mb-3" id="foodinput">
            <div className="input-group-prepend">
                <div className="btn btn-outline-secondary" type="button" id="button-addon1">Search</div>
            </div>
            <input className="form-control"
                onChange={(e) => setTerm(e.target.value)}
                type="text" 
                value={term}
                placeholder="burgers, tacos, pizza..." aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            <div className="input-group-prepend">
                <div className="btn btn-outline-secondary" type="button" id="button-addon1">NEAR</div>
            </div>
            <input  className="form-control" 
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            value={location}
            placeholder="Where" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            <div className="button" onClick={submit}><i className="fas fa-search"></i></div>
            </div>
        </div>
        </form>
    );
};

export default FoodcourtSearch;