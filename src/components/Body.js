import { useState, useEffect } from "react";
import ProfileHome from "./ProfileHome";
import Education from "./Education";
import Dropdowns from "./Dropdowns";
import Shimmer from "./Shimmer";
import SkillBox from "./SkillBox";
const Body = ()=>{
    
    //I am a software enginner at Oracle. I like creating open-source projects and love reading books.
    const [expand, setExpand] = useState(false);
    const onExpandClick = () => {
        setExpand(!expand);
    }
    //const [timer, setTimer] = useState(new Date().toLocaleTimeString());
    //useEffect(()=>{
    //    const timer = setInterval(()=>{
    //        setTimer(new Date().toLocaleTimeString());
    //    },1000);

        //return clearInterval(timer);
    //})
    
    return(
        <>
        <div className="p-4  min-h-screen dark:text-slate-100 dark:bg-black">
             
            <div className="mt-10 ml-10 flex justify-between">
                
                <div className="  p-4 w-6/12 bg-slate-200 dark:bg-gray-800 rounded-md">
                    <h1 className="font-extrabold text-2xl ">Hello, my name is Akshay.</h1>
                    <p className="p-2">I am a software enginner at Oracle. I like creating open-source projects and love reading books.
                    I also play tennis and am very enthusiastic about fitness.
                    </p>
                </div>
                <div className=" dark:bg-black mr-10 rounded-md w-4/12 flex ">
                <ProfileHome/>
                </div>
                
            </div>
            <div >
                <Dropdowns/>
            </div>
            <div className="mt-10 ml-10 flex justify-between">
                <div className="  p-2 w-6/12 bg-slate-200 dark:bg-gray-800 dark:text-white rounded-md">
                    <div className="flex justify-between">
                    <h2 className="self-center">Tech Stack</h2>
                    <button className=" dark:bg-slate-700 bg-slate-600 text-white rounded-md py-1 px-2 mx-2 flex" onClick={onExpandClick}>Expand 
                    <p className="ml-1 animate-bounce"> ↓</p>
                    </button>
                    </div>
                    <div>
                    <div className="">
                        {expand && <SkillBox/>}
                    </div>
                    </div>
                    
                </div>
                
            </div>
            
           
        </div>
        
        
            
        </>
    )
}
export default Body;