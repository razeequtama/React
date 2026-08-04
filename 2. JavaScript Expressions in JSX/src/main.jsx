import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const fName = "Raziq";
const lName = "Rabbani";
const numLimit = 10;

createRoot(document.getElementById('root')).render(
  <div>
    <h1>My name is {`${fName} ${lName}`}</h1>
    <br />
    <h2>My name is {fName} {lName}</h2>
    <br />
    <h3>My name is {fName + " " + lName}</h3>
    <br />
    <p>Here's a random from 0 to {numLimit}: {Math.floor(Math.random() * (numLimit + 1))}</p>
  </div>
)
