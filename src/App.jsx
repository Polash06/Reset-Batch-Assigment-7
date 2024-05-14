import "./App.css";
import Banner from "./componets/Banner/Banner";
// import Blog from "./componets/Blog/Blog";
import Blogs from "./componets/Blogs/Blogs";
import Cooking from "./componets/Cooking/Cooking";
import Main from "./componets/Main/Main";
import Navbar from "./componets/Navbar/Navbar";

function App() {

  return <>
  
  <div className="mx-10 mt-8">
    <Navbar></Navbar>
    <Banner></Banner>
    <Main></Main>
    <div className="flex">
    <Blogs></Blogs>
    <Cooking></Cooking>
    </div>
  </div>
  
  </>;
}

export default App;
