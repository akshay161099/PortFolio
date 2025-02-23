import React, { useEffect, useState } from 'react'

const BlogBody = () => {
    const [data, setData] = useState("");
    useEffect(()=>{
        const fetchData = async () => {
          try {
            const data = await fetch("http://localhost:8080/blogs/fetch")
          const res = await data.json();
          setData(res);
          
          }
          catch (error){
            console.log(error);
          }
        }
        fetchData();
      },[])
  return (
    <div>
        <p>{data[0].author}</p>
    </div>
  )
}

export default BlogBody