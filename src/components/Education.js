import { useState } from "react";
import EducationBody from "./EducationBody";
const Education = () =>{
    const[clicked, setClicked] = useState(false);
    const handleClick = ()=>{
        setClicked(!clicked);
    }
    return(
        
        <div>
            <div className=" flex justify-between">
                        <h1 className=" p-1">Education</h1>
                        <button className="bg-slate-600 p-1 rounded-md text-slate-100" onClick={handleClick}>Expand</button>
            </div>
            {clicked && <EducationBody/>}
        </div> 
        
    )
}
export default Education;