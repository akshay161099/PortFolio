import Education from "./Education";
import Work from "./Work";
import Achievements from "./Achievements";
const Dropdowns = ()=>{
    
    return(
        <div className="dark:text-white">
            <div  className="shadow-md w-4/12 my-5 ml-10 bg-slate-200  dark:bg-slate-800  rounded-md p-1 "  >
                     <Education/>
            </div>
            <div  className="shadow-md w-4/12 my-5 ml-10  bg-slate-200  dark:bg-slate-800  rounded-md p-1 "  >
                     <Work/>
            </div>
            <div  className="shadow-md w-4/12 my-5 ml-10  bg-slate-200  dark:bg-slate-800  rounded-md p-1 "  >
                     <Achievements/>
            </div>
        </div>
    )
}
export default Dropdowns;