import React from "react";
// import {Main} from "./Input";
// import "../App.css"

function Main(props){
    if(props.title === ""){
        return;
    }else{
        return (
            <div className="main">
              <h3>{props.title}</h3>
              <hr></hr>
              <p>{props.note}</p>
              <div className="delete-button-div">
              {props.title && <button className="delete-button"onClick={props.onDeleteClick}><b>Done</b></button>}
              </div>
            </div>
          );
    }
}
    
 

export { Main };