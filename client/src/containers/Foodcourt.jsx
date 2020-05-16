import React, { Component } from 'react';
import "./Foodcourt.css";
import FoodcourtForm from "../components/Forms/FoodcourtForm";
import FoodcourtTable from "../components/Tables/FoodcourtTable"



class Foodcourt extends Component {

  state = {};

  render() {
    return (
        <div className="foodcourt-background">
            <div className="container" id="looksBlock">
                <div className="row">
                    <div className="col-sm-3">
                    <div className="row">
                    <FoodcourtForm />
                    </div>
                    <br></br>
                    <div className="row">
                    </div>
                    </div>
                    <div className="col-sm-9">
                    <FoodcourtTable />
                    </div>
                </div>
            </div>
                
            
        </div>
    );
}
}

export default Foodcourt;