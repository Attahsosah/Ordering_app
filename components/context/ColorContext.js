import {  createContext, useState } from "react";

export const ChangeContext = createContext(); 
export const HoverContext = createContext();
export const ColorProvider = ({children}) =>{
    const [clicked, setClicked ] = useState(false);
    console.log(clicked);

    const [hover, setHover] = useState(false);
    return(
        <ChangeContext.Provider value={[clicked, setClicked]}>
            <HoverContext.Provider value={[hover, setHover]}>
             {children}
            </HoverContext.Provider>
            
        </ChangeContext.Provider>
    )
}

