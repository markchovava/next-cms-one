"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
export const BackendContext = createContext();

function BackendContextProvider({ children }) {
    const [pageName, setPageName] = useState('')

    return (
        <BackendContext.Provider value={{ 
            pageName, 
            setPageName
        }}>
            {children}
        </BackendContext.Provider>
    )

}

export const BackendContextState = () => {
    return useContext(BackendContext)
  }
 
 export default BackendContextProvider