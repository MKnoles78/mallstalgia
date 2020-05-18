import React from 'react';
import "./Spinner.css";

export function spinner () {
    return (
        <div>
            <div className="d-flex align-items-center" id="spinner">
            <strong>Loading...</strong>
            <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>
    );
};

export default spinner;