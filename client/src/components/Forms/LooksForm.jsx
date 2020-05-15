import React, { Component } from 'react';
import "./LooksForm.css";



class LooksForm extends Component {

    state = {
        retailerName: "",
        retailerURL: "",
      };
    
      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    
        this.setState({
          retailerName: "",
          retailerURL: ""
        });
      };


    
      render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
          <div>
            <form className="form">
              <input
                value={this.state.retailerName}
                name="retailerName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Retailer IG"
              />
              <input
                value={this.state.retailerURL}
                name="retailerURL"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Retailer URL"
              />
              <button onClick={this.state.handleFormSubmit}>Submit</button>
            </form>

          </div>
          
        );
      }
    }
    


export default LooksForm;