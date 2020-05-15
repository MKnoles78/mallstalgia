// import React, { Component } from 'react';
// import "./Looks.css";
// // import logo from "../images/LogoRound.png";
// import LooksForm from "../components/Forms/LooksForm";
// import LooksTable from "../components/Tables/LooksTable";
// import InstagramDetail from "../components/Looks/InstagramDetail";
// // import API from "../utils/API";
// import axios from "axios";

// class Looks extends Component {

//     state = {
//         result: {graphql: {user: {edge_felix_video_timeline: {edges: [{node: { shortcode: {} }}] }}}},
//         search: "",
//         shortCodes: [],
    
//     };

//     componentDidMount() {
//         this.searchInstagram("");


// };



//     // let newObject = {};
//     // for (let i = 0; i < arrayOfObjects.length; i++) {
//     // newObject[arrayOfObjects[i]] = false;
//     // }
//     // console.log(newObject);
//     // this.setState({
//     // checkboxes: newObject,
//     // });

//       searchInstagram = query => {
//         // API.search()
//         //   //.then(res => this.setState({ result: res.data }))
//         //   .then(res => {
//         //       console.log(res.data);
//         //       // this.setState({ result: res.data})
//         //   })
//         //   .catch(err => console.log(err));
//         axios.get("https://www.instagram.com/express/?__a=1")
//         .then(result => {
//             // console.log(result.data.graphql.user.edge_felix_video_timeline.edges);
//             const edges = result.data.graphql.user.edge_felix_video_timeline.edges;
//             // console.log(edges);
//             const shortCodes = edges.map(edge => edge.node.shortcode);
//             // console.log(shortCodes);
//             this.setState({
//                 shortCodes
//             })
//         }).catch(err => {
//             console.log(err);
//         })
//       };
    
//       handleInputChange = event => {
//         const value = event.target.value;
//         const name = event.target.name;
//         this.setState({
//           [name]: value
//         });
//       };

    
//     render() {
//         return (
//             <div className="looks-background">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-sm-3">
//                         <div className="row" style={{color: "green"}}>
//                             <LooksForm />
//                         </div>
//                         <br></br>
//                         <div className="row">
//                         </div>
//                             <LooksTable />
//                         </div>
//                         <div className="col-sm-9">
//                         <div>
//                         <table className="table table-dark">
//                             <thead>
//                                 <tr>
//                                 <th scope="col"></th>
//                                 <th scope="col"></th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                 <td style={{width: "200px", height: "200px"}}>
//                                 <InstagramDetail 
                                    
//                                 />
                            
                                

//                                 </td>
//                                 </tr> 
//                             </tbody>
//                             </table>     
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                    
                
//             </div>
//         );
//     }
// }

// export default Looks;