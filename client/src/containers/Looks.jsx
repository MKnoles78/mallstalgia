import React, { Component } from 'react';
import "./Looks.css";
import LooksForm from "../components/Forms/LooksForm";
import LooksTable from "../components/Tables/LooksTable";
// import InstagramDetail from "../components/Looks/InstagramDetail";
// import axios from "axios";
import API from "../utils/API"

class Looks extends Component {

    state = {
        search: "",
        shortCodes: [],
        retailerName: [],
        retailerURL: [],
    
    };

    componentDidMount() {
        this.searchInstagram("");

};

    renderTable(i) {
      return <LooksTable retailers = {this.state.retailerName} />;
    }

      searchInstagram = query => {
        API.IGsearch()
        .then(result => {
            // console.log(result.data.graphql.user.edge_felix_video_timeline.edges);
            const edges = result.data.graphql.user.edge_felix_video_timeline.edges;
            // console.log(edges);
            const shortCodes = edges.map(edge => edge.node.shortcode);
            console.log(shortCodes);
            this.setState({
                shortCodes
            })
        }).catch(err => {
            console.log(err);
        })
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
        const retailerName = this.state.retailerName.slice();
        console.log("you clicked me")
        this.setState({
          retailerName: retailerName,
          retailerURL: '',
        });
      };

  

    
    render() {
        return (
            <div className="looks-background">
                <div className="container" id="looksBlock">
                    <div className="row">
                        <div className="col-sm-3">
                        <div className="row">
                        <LooksForm 
                        retailerName = {this.state.retailerName}
                        retailerURL = {this.state.retailerURL}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        />
                        </div>
                        <br></br>
                        <div className="row">
                          {this.renderTable(0)}
                        </div>
                        <div className="row">
                          {this.renderTable(1)}
                        </div>
                        </div>
                        <div className="col-sm-9">
                        <div>
                        {/* <InstagramDetail displayLooks = {this.state.shortCodes}/>  */}
                        <div className="elfsight-app-68b2bb76-b13c-450d-a9fd-379d558d3afa"></div>   
                        </div>
                        </div>
                    </div>
                </div>
                    
                
            </div>
        );
    }
}

export default Looks;