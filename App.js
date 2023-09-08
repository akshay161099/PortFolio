import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
import Home from "./src/components/Home";
import DarkContext from "./src/util/DarkContext";
const App = () =>{
    const [dark,setDark] = useState("true");
    return(
        <DarkContext.Provider value={{dark,setDark}}>
        <div>
            <Home></Home>
        </div>
        </DarkContext.Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);