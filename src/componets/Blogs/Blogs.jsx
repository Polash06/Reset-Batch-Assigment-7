import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs , Setblogs] = useState([])

    useEffect( () =>{
        fetch('blogs.json')
        .then( res => res.json())
        .then ( data => Setblogs(data))
    } ,[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;