import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
import Blogs from "./src/components/Blogs";
import Home from "./src/components/Home";
import DarkContext from "./src/util/DarkContext"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./src/components/Contact";
import Projects from "./src/components/Projects";
const App = () =>{
    const [dark,setDark] = useState("false");
    
    return(
        <DarkContext.Provider value={{dark,setDark}}>
        <div>
            <Header/>
            <Outlet/>
        </div>
        </DarkContext.Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Home/>
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/projects",
                element:<Projects/>
            }
        ],
        errorElement:<Error/>
    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);