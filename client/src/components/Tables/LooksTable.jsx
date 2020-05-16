import React from 'react';
import "./LooksTable.css";


function LooksTable (props) {
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
                {/* {props.retailers.map(retailer =>
                <tr className="table-primary" key={retailer.id}>
                <th scope="row">{retailer.id}</th>
                <td>{retailer.name}</td>
                </tr>   
                    )} */}

            </tbody>
            </table>    
        </div>
    );

};



  
  


export default LooksTable;