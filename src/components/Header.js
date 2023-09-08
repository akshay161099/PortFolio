import Switcher from "./Switcher";
import { DARk_LORD, YODA } from "../util/constants";
import { useContext } from "react";
import DarkContext from "../util/DarkContext";

const Header = () =>{
    const {dark, setDark} = useContext(DarkContext);
    return(
        <div className="h-15 border-b-2 border-slate-600 dark: dark:border-slate-400 ">
            <div className=" bg-slate-200 items-center justify-between flex dark:bg-black flex-wrap flex justify-between dark:text-teal-50" >
                <h1 className="font-serif font-bold text-2xl ml-10 pl-5">Akshay</h1>
                {dark === true ? <img className="w-[70]  object-cover " src={YODA}></img> : 
                <img className=" w-[70] object-cover  " src={DARk_LORD}></img> }
                
                <div className="flex items-center">

                    <div className="mx-5 pr-5 flex"><Switcher/>
                    </div>
                    <h1 className="mx-5 hover:bg-slate-400 dark:hover:bg-zinc-800 rounded-md hover:cursor-pointer p-1">Home</h1>
                    <h1 className="mx-5 hover:bg-slate-400 dark:hover:bg-zinc-800 rounded-md hover:cursor-pointer p-1">Contact</h1>
                    <h1 className="mx-5 hover:bg-slate-400 dark:hover:bg-zinc-800 rounded-md hover:cursor-pointer p-1">Blog</h1>
                    <h1 className="mx-5 hover:bg-slate-400 dark:hover:bg-zinc-800 rounded-md hover:cursor-pointer p-1">Projects</h1>
                    
                </div>
                
                
            </div>
            <div className="flex justify-between">
                

            </div>
        </div>
    )
}
export default Header;