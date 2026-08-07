import { useContext } from "react";
import { isLoggedContext } from "../context/authContext";

export default function ContextReader()
{
    //THIS IS WHERE THE HOOK PLAYS
    const {isLogged} = useContext(isLoggedContext);

    return(
        <h1>{isLogged ? "Logged In" : "Not Logged In"}</h1>
    )
}