import React from 'react';
import "./LooksTable.css"

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
                <td>Retailer</td>
                </tr>
                <tr className="table-primary">
                <th scope="row">2</th>
                <td>Retailer</td>
                </tr>
                <tr className="table-primary">
                <th scope="row">3</th>
                <td>Retailer</td>
                </tr>
            </tbody>
            </table>    
        </div>
    );

};

export default LooksTable;