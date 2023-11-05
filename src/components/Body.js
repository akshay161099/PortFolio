import { useState, useEffect } from "react";
import ProfileHome from "./ProfileHome";
import Education from "./Education";
import Dropdowns from "./Dropdowns";
import Shimmer from "./Shimmer";
const Body = ()=>{
    useEffect(()=>{fetchData();},[]);
    const[author,setAuthor] = useState("");
    const [quote, setQuote] = useState("");
    const fetchData = async()=>{
        const data = await fetch("http://localhost:8080/quotes");
        const json = await data.json();
        const quotes = (json[Math.floor(Math.random() * 90)]);
        setQuote(quotes.quote);
        setAuthor(quotes.author);
    }
    //I am a software enginner at Oracle. I like creating open-source projects and love reading books.
    if(quote.length === 0){return(<><Shimmer/></>)}
    else
    return(
        <>
        <div className="p-4  h-screen dark:text-slate-100 dark:bg-black">
                <div className=" ml-10 dark:bg-slate-600 rounded-md p-2">
                <h2>{quote}</h2> 
                   <h3> ~ {author}</h3>
                   
                </div>
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