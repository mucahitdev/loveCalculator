import React from 'react';

function Card({res,showCard}) {
  const myClassNames = () => {
    let classAll = "card text-white  me-auto ms-auto mt-5 "
    if(res.percentage >=50 ) {
      return classAll + "bg-success"
    }else {
      return classAll+"bg-danger"
    }
  }
  return <div style={{ display: showCard ? "block" : "none" }}>
      <div className={myClassNames()}>
          <div className="card-header"> <b> { res.sname } </b> ve <b> { res.fname } </b> arasındaki ilişkinin gücü? </div>
          <div className="card-body">
            <h5 className="card-title">İlişki yüzdeniz : <b> %  { res.percentage } </b> </h5>
            <p className="card-text"> { res.result }  </p>
          </div>
        </div> 
  </div>;
}

export default Card;
