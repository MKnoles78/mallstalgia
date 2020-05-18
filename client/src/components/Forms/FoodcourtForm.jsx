import React from 'react';
import "./FoodcourtForm.css";
import FoodInput from "./FoodInput"



export function FoodcourtForm (props){

        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
          <div>
            <form className="form" id="food-form">
            <FoodInput cuisine = "Chinese"/>
            <FoodInput cuisine = "Mexican"/>
            <FoodInput cuisine = "Italian"/>
            <FoodInput cuisine = "American"/>
            <FoodInput cuisine = "Japanese"/>
            <FoodInput cuisine = "Indian"/>
            <FoodInput cuisine = "Thai"/>
            <FoodInput cuisine = "Greek"/>
            <FoodInput cuisine = "Middle Eastern"/>
            <FoodInput cuisine = "Vegetarian"/>
            <FoodInput cuisine = "Burgers"/>
            <FoodInput cuisine = "Tacos"/>
            <FoodInput cuisine = "Pizza"/>
            <FoodInput cuisine = "Barbeque"/>
            <FoodInput cuisine = "Ramen"/>
              <button onClick={props.handleFormSubmit} id="food-button">Submit</button>
            </form>
            
          </div>
          
        );
    }
    


export default FoodcourtForm;