import { AKSHAY_IMG } from "../util/constants";
import profileImage from '../util/profile.jpeg';
const ProfileHome = ()=>{
    return(
        <>
        <img className="rounded-full w-[150] h-[150] " src={profileImage}></img>
                <div className="dark:text-slate-200 ml-10 text-sm ">
                        <div className="flex items-center py-2">
                            <div className="rounded-full w-2 h-2 dark:bg-slate-200 bg-black"></div>
                            <h1 className="ml-5">Akshay Kumar</h1>
                        </div>
                            <div className="flex items-center py-2">
                        <div className="rounded-full w-2 h-2 dark:bg-slate-200 bg-black"></div>
                        <h1 className="ml-5">SDE at Oracle</h1>
                        </div>
                        <div className="flex items-center py-2">
                        <div className="rounded-full w-2 h-2 dark:bg-slate-200 bg-black"></div>
                        <h1 className="ml-5">B.E from RVCE, Bangalore</h1>
                        </div>
                        <div className="flex items-center py-2">
                        <div className="rounded-full w-2 h-2 dark:bg-slate-200 bg-black"></div>
                        <h1 className="ml-5">India</h1>
                        </div>
                </div></>
    )
}
export default ProfileHome;