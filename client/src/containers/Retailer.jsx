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

  // componentDidMount() {}

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h1>This is my Retail page.</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    temporibus aut numquam aperiam, harum cum at praesentium
                    dolor voluptatibus ratione iste quaerat quisquam hic placeat
                    reprehenderit illo officiis, voluptate eveniet!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Retailer;
