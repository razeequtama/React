import React from "react";

function Info(props)
{
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    );
};

export default Info;