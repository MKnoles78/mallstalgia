import React from 'react';
import "./LooksTable.css";
import RetailerRow from './RetailerRow';

const LooksTable = (props) => {
    return (
        <div>
            <table className="table">
            <thead>
                <tr className="table-primary">
                <th scope="col">#</th>
                <th scope="col">Retailer</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-primary">
                <th scope="row">1</th>
                <td>{props.retailers}</td>
                </tr>
                <tr className="table-primary">
                <th scope="row">2</th>
                <td>Retailer</td>
                </tr>
                <RetailerRow/>

            </tbody>
            </table>    
        </div>
    );

};



  
  


export default LooksTable;