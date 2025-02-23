const Projects = ()=>{
    return(
        <div className="p-4 dark:bg-black  h-screen dark:text-white bg-white ">
            <div className="m-10 bg-slate-700 w-3/12 p-2 rounded-md text-center">
                <h1 className="text-2xl dark:bg-slate-900 text-red-600">Netflix</h1>
                <p>A Netflix Clone</p>
                <p>Click here to open</p>
                <button className="bg-red-600 p-2 rounded-md" onClick={() => window.location.replace("https://netflixgpt-f6298.web.app/")}> Open
                </button>
            </div>
            <div>
            
            </div>
        </div>
    )
}

export default Projects;