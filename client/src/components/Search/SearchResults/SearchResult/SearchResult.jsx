import React from 'react';
import "./SearchResult.css"

export function SearchResult (props) {

    if (!props.business) {
        return (<div/>);
    }

    const tags = props.business.categories.map(category => (<span className="tag" key={props.business.id + category.title}>{category.title}</span>));

    return (
        <div>
        <div className="result">
            <img src={props.business.image_url} alt="business" className="business-image"/>
            <div className="business-info">
            <h2><small className="text-muted">{props.business.name}</small></h2>
            <h4><small className="text-muted">Rating {props.business.rating} Stars</small></h4>
            <h4><small className="text-muted">{props.business.review_count} Reviews</small></h4>
            <p><small className="text-muted">{props.business.price}</small></p>
            </div>
            <div className="contact-info">
            <p>{props.business.display_phone}</p>
            <p>{props.business.location.display_address}</p>


            </div>
        </div>
        </div>
    );
};

export default SearchResult;