import { useState } from "react";
import ProfileHome from "./ProfileHome";
import Education from "./Education";
import Dropdowns from "./Dropdowns";

const Body = ()=>{
    
    return(
        <>
        <div className="p-4  h-screen dark:text-slate-100 dark:bg-black">
            <div className="mt-10 ml-10 flex justify-between">
                <div className="  p-4 w-6/12 bg-slate-200 dark:bg-gray-800 rounded-md">
                    <h1 className="font-extrabold text-2xl ">Hello, my name is Akshay.</h1>
                    <p className="p-2">I am a software enginner at Oracle. I like creating open-source projects and love reading books.
                    </p>
                </div>
                <div className=" dark:bg-black mr-10 rounded-md w-4/12 flex ">
                <ProfileHome/>
                </div>
            </div>
            <div >
                <Dropdowns/>
            </div>
           
        </div>
        
            
        </>
    )
}
export default Body;