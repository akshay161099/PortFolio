const SkillBox = () =>{
    const saveSkill = () =>{
        
    }
    const arr = ['Java','Spring Boot','Mysql','Helidon','Redis','GraphQl','Docker', 'Kubernetes', 'Nginx','Jenkins CI/CD', 
    'OCI','Redis','HTML', 'CSS', 'JavaScript', 'React',
    'NodeJs' , 'Tailwind css','NextJs',];
    return(
        <div className="">
            <ul className="flex flex-wrap">
                
                {arr.map((item, index) => (
                    <li className="mr-4 my-3 p-1 dark:bg-slate-600 bg-slate-400 rounded-md " key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default SkillBox;