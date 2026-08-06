import React, { useState } from "react";

function Input() {
    const [characters, countCharacters] = useState(0);

    function setCharactersCount(event) {
        const charactersAmount = event.target.value.length;
        countCharacters(charactersAmount);
    }

    return (
        <>
            <input
                type="text"
                onChange={setCharactersCount}
            />

            <p>Characters: {characters}</p>
        </>
    );
}

export default Input;