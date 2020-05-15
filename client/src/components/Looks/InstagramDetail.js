import React from 'react';

const InstagramDetail = (props) => {

  
  return (
    
   <div> 
     <div className="row">
       <div className="card" style={{width: "15rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.displayLooks[1]}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div> 
        <div className="card" style={{width: "15rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.displayLooks[2]}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div> 
        <div className="card" style={{width: "15rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.displayLooks[3]}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div> 
        <div className="card" style={{width: "15rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.displayLooks[4]}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div> 
      </div> 
    </div>
  );
};

export default InstagramDetail;


