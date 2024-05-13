const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"  
      >
        <img className="w-full rounded-3xl h-[900px]" src="/src/assets/24912997.webp" alt="" />
        <div className="">
          <div className="">
            <h1 className="mb-28 text-7xl font-bold text-white mx-56">Discover an exceptional cooking <br></br><small className="mx-56 text-7xl">class tailored for you!</small></h1>
            <p className="mb-72 text-white text-xl">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
            </p>
           <div className="mx-[650px]">
           <button className="btn btn-success mr-4 rounded-3xl w-44">Explore Now</button>
            <button className="btn rounded-3xl w-44">Our Feedback</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
