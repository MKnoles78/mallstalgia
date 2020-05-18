import React, { Component } from 'react';
import "./Foodcourt.css";
import FoodcourtForm from "../components/Forms/FoodcourtForm";
import FoodcourtTable from "../components/Tables/FoodcourtTable";
import API from "../utils/API"



class Foodcourt extends Component {

  state = {};

  componentDidMount() {
    // this.searchYelp("");

};

  searchYelp = query => {
    API.search()
    .then(result => {
        console.log(result);
        // const edges = result.data.graphql.user.edge_felix_video_timeline.edges;
        // console.log(edges);
        // const shortCodes = edges.map(edge => edge.node.shortcode);
        // console.log(shortCodes);
        // this.setState({
        //     shortCodes
        // })
    }).catch(err => {
        console.log(err);
    })
  };

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