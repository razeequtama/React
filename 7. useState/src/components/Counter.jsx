import React from "react";
import { useState } from "react";

function Counter()
{
    let [counter, setCounter] = useState(0);

    function increase()
    {
        setCounter(counter => counter += 1);
    }

    return(
        <>
            <button onClick={increase}>Counter is {counter}</button>
            <br/>
        </>
    );
};

export default Counter;