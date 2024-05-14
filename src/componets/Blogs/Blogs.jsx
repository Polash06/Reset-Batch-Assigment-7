import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs , Setblogs] = useState([])

    useEffect( () =>{
        fetch('blogs.json')
        .then( res => res.json())
        .then ( data => Setblogs(data))
    } ,[])
    return (
        <div className="md:w-2/3 mx-16 mt-8">
            <h2 className="text-4xl font-medium">Blogs : {blogs.length}</h2>
            <div className="flex gap-6 mt-8">
            {
                blogs.map( blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;