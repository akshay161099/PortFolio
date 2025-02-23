import { useEffect, useState } from "react"; 
import BlogSection from "./BlogSection";
const Blogs = () =>{

    const onWriteClick = () =>{
        window.alert("Write");
    }
    
    return(
        <div className="dark:bg-black h-screen dark:text-white">
            
            <button className="bg-slate-600 px-2 text-xl rounded-md m-4" onClick={onWriteClick}>Write</button>
            <BlogSection/>
        </div>
    )
}
export default Blogs;