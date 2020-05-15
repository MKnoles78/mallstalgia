import React, { Component } from "react";
import "./Retailer.css";
// import axios from "axios";

class Retailer extends Component {
//   state = {};

// componentDidMount() {
//     axios.get("")
//     .then(res => {
//         console.log(res.data);
//     }).catch(err => {
//         console.log(err)
//     })
// }

componentDidMount() {}

  render() {
    return (
      <div id="retailer-background">
        <h1>This is my retailer page.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          temporibus aut numquam aperiam, harum cum at praesentium dolor
          voluptatibus ratione iste quaerat quisquam hic placeat reprehenderit
          illo officiis, voluptate eveniet!
        </p>
      </div>
    );
  }
}

export default Retailer;
