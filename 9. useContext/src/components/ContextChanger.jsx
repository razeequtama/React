import { useContext } from "react";
import { isLoggedContext } from "../context/authContext";

export default function ContextChanger()
{
    //THIS IS WHERE THE HOOK PLAYS
    const {setIsLogged} = useContext(isLoggedContext);

    return(
        <button onClick={() => setIsLogged(prev => prev = !prev)}>Toggle me!</button>
    )
}