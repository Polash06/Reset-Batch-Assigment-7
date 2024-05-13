import "./App.css";
import Banner from "./componets/Banner/Banner";
import Blogs from "./componets/Blogs/Blogs";
import Main from "./componets/Main/Main";
import Navbar from "./componets/Navbar/Navbar";

function App() {

  return <>
  
  <div className="mx-10 mt-8">
    <Navbar></Navbar>
    <Banner></Banner>
    <Main></Main>
    <Blogs></Blogs>
  </div>
  
  </>;
}

export default App;
