import React, { Component } from "react";
import "./Retailer.css";
import axios from "axios";
// import UserContext from "../utils/UserContext";

class Retailer extends Component {
    state = {
        joke: ""
    };

    // const isLoggedIn = useContext(UserContext)

  //TODO: call api
  
  componentDidMount() {
      if(this.props.isLoggedIn) {
        axios.get("https://api.chucknorris.io/jokes/random")
        .then(res => {
            console.log(res.data.value);
            this.setState({
                joke: res.data.value
            })
        }).catch(err => {
            console.log(err)
        })
      }else{
          alert("You are not signed in. ")
      }
  }

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
                    {this.state.joke}
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
