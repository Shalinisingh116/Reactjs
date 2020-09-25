import React from "react";
function Card(props){
    return(
      <>
  <div className="cards">
    <div className="card">
      <img src={props.imgsrc} alt="photo" className="cardimg" />
      <div className="cardinfo">
        <span className="cardcatg"> {props.year} </span>
          <h2 className="cardtitle"> {props.title} </h2>
            <a href={props.link} target="blank">
             <button>READ MORE
               </button> 
            </a>
      </div>
    </div>
  </div>
  </>
  );
  }
  export default Card;
