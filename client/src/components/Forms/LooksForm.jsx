import React from 'react';
import "./LooksForm.css";



function LooksForm (props){

        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
          <div>
            <form className="form">
              <input
                key={props.retailerName.id}
                value={props.retailerName}
                name="retailerName"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Retailer IG"
              />
              <input
                key={props.retailerURL.id}
                value={props.retailerURL}
                name="retailerURL"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Retailer URL"
              />
              <button className="looksForm" onClick={props.handleFormSubmit}>Submit</button>
            </form>

          </div>
          
        );
    }
    


export default LooksForm;