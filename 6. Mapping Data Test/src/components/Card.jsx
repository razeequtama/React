import React from "react";

function makeSkills(skills) {
    return (
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    );
}


function Card(props)
{
    return(
        <>
            <h3>ID: {props.id}</h3>
            <h1>{props.name}</h1>
            <h2>{props.isStudent == true ? "Student" : "Employee"}</h2>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <p>{props.skills.length > 0 ? "Skills:" : "This person has no skill"}</p>
            {props.skills.length > 0 ? makeSkills(props.skills) : null}
            <p>Address: {props.city}, {props.country}</p>
        </>
    )
}

export default Card;