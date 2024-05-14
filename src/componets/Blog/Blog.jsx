/* eslint-disable react/prop-types */
const Blog = ({ blog }) => {
  const { name, image, description, preparation_time } = blog;
  return (
    <div>
      <div className="flex">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-full" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{name}</h2>
            <p>{description}</p>

            <ul>
              <li className="text-2xl font-bold mb-2">{preparation_time}</li>
              <div className="text-sm font-medium">
                <li> . 500g ground beef</li>
                <li> . 1 onion, chopped</li>
                <li> . 2 cloves garlic, minced </li>
              </div>
            </ul>
            <div className="flex justify-between">
              <div className=" flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h2 className="text-sm font-medium "> 30 minutes</h2>
              </div>
              <div className=" flex  gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                  />
                </svg>

                <h2 className="text-sm font-medium "> 600 calories</h2>
              </div>
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-success font-bold text-xl mr-4 rounded-3xl w-44">
                Want to Cook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
