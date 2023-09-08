import { useState } from "react";
import AchievementBody from "./AchievementBody";
const Achievements = ()=>{
    const[clicked, setClicked] = useState(false);
    const handleClick = ()=>{
        setClicked(!clicked);
    }
    return(
        <div>
            <div className=" flex justify-between">
                        <h1 className=" p-1">Achievements</h1>
                        <button className="bg-slate-600 p-1 rounded-md text-slate-100" onClick={handleClick}>Expand</button>
            </div>
            {clicked && <AchievementBody/>}
        </div> 
    )
}
export default Achievements;