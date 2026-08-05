import React from "react";
import people from "../data/people.js";
import Card from "./components/Card.jsx";

function createCard(person)
{
    return(
        <>
            <Card 
                key = {person.id}
                id = {person.id}
                name = {person.name}
                isStudent = {person.isStudent}
                age = {person.age}
                email = {person.email}
                skills = {person.skills}
                city = {person.address.city}
                country = {person.address.country}
            />
            <br />
        </>
    )
}

function App()
{
    return(
        <>
            {people.map(createCard)}
        </>
    )
}

export default App;