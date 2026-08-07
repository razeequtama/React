import { useState, useContext, createContext } from "react";

export const isLoggedContext = createContext(null);

export function AuthContextProvider({children})
{
    let [isLogged, setIsLogged] = useState(false);

    let data = {isLogged, setIsLogged};

    return(
        <isLoggedContext.Provider value={data}>
            {children}
        </isLoggedContext.Provider>
    )

}