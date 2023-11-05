import { Link } from "react-router-dom";
const Contact = ()=>{
    return(
        <div className="dark:bg-black h-screen dark:text-gray-200 ">
        <div className="p-5 text-white text w-4/12">
            <h1 className="bg- p-3 text-xl m-2">Contacts</h1>
            <div className="bg-orange-500 p-3 rounded-md  m-5 flex">
                <img className="w-[50]" src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"></img>
                <h2 className="dark:text-black" >akshaykumar161099@gmail.com</h2>
            </div>
            <Link to={"https://www.linkedin.com/in/akshay-kumar-740a1b193/"}>
            <div className="bg-blue-500 p-3 text-xl rounded-md  m-5 flex items-center hover:text-black ">
                <img className="w-[40] " src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"></img>
                <h2 className="px-5" >Linkedin</h2>
            </div>
            </Link>
            <Link className="" to={"https://github.com/akshay161099"}><div className="bg-slate-600  p-3 text-xl rounded-md  m-5 flex items-center hover:text-black">
                <img className="w-[40]" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
                <h2 className="px-5">Github</h2>
            </div>
            </Link>
            <Link to={"https://leetcode.com/akshay1610/"}><div className="bg-slate-800 p-3 text-xl rounded-md  m-5 flex items-center dark:hover:text-black">
                <img className="w-[40]" src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3628885-3030025.png"></img>
                <h2 className="px-5">Leetcode</h2>
            </div></Link>
        </div>
        <div className="p-10">
            <p>Please feel free to contact</p>
        </div>
        
        </div>
    )
}
export default Contact;