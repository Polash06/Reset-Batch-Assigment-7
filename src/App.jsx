/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Banner from "./componets/Banner/Banner";
// import Blog from "./componets/Blog/Blog";
import Blogs from "./componets/Blogs/Blogs";
import Cooking from "./componets/Cooking/Cooking";
import Main from "./componets/Main/Main";
import Navbar from "./componets/Navbar/Navbar";
import Blog from "./componets/Blog/Blog";

function App() {

const [cooking , Setcooking] = useState([])

const HandelcookingMarks = Blog  => {
  const newcooking = [...cooking , Blog]
  Setcooking(newcooking)
}

  return <>
  
  <div className="mx-10 mt-8">
    <Navbar></Navbar>
    <Banner></Banner>
    <Main></Main>
    <div className="flex">
    <Blogs HandelcookingMarks={HandelcookingMarks}></Blogs>
    <Cooking cooking={cooking}></Cooking>
    </div>
  </div>
  
  </>;
}

export default App;
