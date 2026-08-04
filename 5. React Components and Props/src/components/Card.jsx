import React from "react";
import Info from "./Info";

function Card(props)
{
    return(
        <div className="card">
            <img src={props.imgURL} alt="A photo of a celebrity" />
            <Info name={props.name} email={props.email} tel={props.tel}/>
        </div>
    );
};

export default Card;