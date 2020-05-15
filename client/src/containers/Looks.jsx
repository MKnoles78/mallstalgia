import React, { Component } from 'react';
import "./Looks.css";
import LooksForm from "../components/Forms/LooksForm";
import LooksTable from "../components/Tables/LooksTable";
import InstagramDetail from "../components/Looks/InstagramDetail";
import axios from "axios";

class Looks extends Component {

    state = {
        search: "",
        shortCodes: [],
        retailer: [],
    
    };

    componentDidMount() {
        this.searchInstagram("");

};




      searchInstagram = query => {
        // API.search()
        //   //.then(res => this.setState({ result: res.data }))
        //   .then(res => {
        //       console.log(res.data);
        //       // this.setState({ result: res.data})
        //   })
        //   .catch(err => console.log(err));
        axios.get("https://www.instagram.com/express/?__a=1")
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
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

    
    render() {
        return (
            <div className="looks-background">
                <div className="container" id="looksBlock">
                    <div className="row">
                        <div className="col-sm-3">
                        <div className="row">
                            <LooksForm />
                        </div>
                        <br></br>
                        <div className="row">
                        </div>
                            <LooksTable />
                        </div>
                        <div className="col-sm-9">
                        <div>
                        <InstagramDetail displayLooks = {this.state.shortCodes}/>    
                        </div>
                        </div>
                    </div>
                </div>
                    
                
            </div>
        );
    }
}

export default Looks;