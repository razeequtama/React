import React from "react";
import { useState } from "react";

const displayNone = {display: "none"};
const displayBlock = {display: "block"};

function Text()
{
    let [isHidden, setTextStatus] = useState(false);

    function toggleVisibility()
    {
        setTextStatus(isHidden => isHidden ? false : true);
    }

    return(
        <>
            <p style={isHidden ? displayNone : displayBlock}>This is a text</p>
            <button onClick={toggleVisibility}>{isHidden ? "Show": "Hide"}</button>
            <br />
        </>
    );
};

export default Text;