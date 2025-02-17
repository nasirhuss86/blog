// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
//       <h1 className="text-3xl font-semibold mb-6 text-black text-center">Join Our Community for Free</h1>
//       <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-md">
//         <Link to="/signup" className="w-full lg:w-1/2 mb-4 lg:mb-0">
//           <button type="button" className="w-full bg-white text-sm text-gray-600 p-3 rounded-md shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
//             Sign Up
//           </button>
//         </Link>
//         <Link to="/signin" className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-2">
//           <button type="button" className="w-full bg-white text-sm text-gray-600 p-3 rounded-md shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
//             Sign In
//           </button>
//         </Link>
//       </div>
//       <p className="mt-8 text-gray-600 text-center">Please sign up to post your blogs.</p>
//       <Link to="/blogs" className="mt-4">
//         <button type="button" className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors duration-300">
//           View Blogs
//         </button>
//       </Link>
//     </div>
//   );
// };

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 min-h-screen flex flex-col justify-center items-center">

      <blockquote className="text-xl md:text-2xl font-semibold italic text-center text-gray-700 px-4">
        “Do yourself as much as possible. It’s never too late. Keep the flow, and leave the rest to God.”
        <span className="block text-right mt-2 text-sm text-gray-600">- Nasir Hussain</span>
      </blockquote>


      <h1 className="text-4xl font-extrabold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 text-center">
        Join Our Community for Free
      </h1>


      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-md mt-12">
        <Link to="/signup" className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <button
            type="button"
            className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white text-sm p-3 rounded-lg shadow-lg hover:from-green-500 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition duration-300"
          >
            Sign Up
          </button>
        </Link>
        <Link to="/signin" className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-2">
          <button
            type="button"
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm p-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300"
          >
            Sign In
          </button>
        </Link>
      </div>


      <p className="mt-8 text-gray-700 text-center text-lg">
        Please sign up to post your blogs and be part of the journey.
      </p>


      <Link to="/blogs" className="mt-6">
        <button
          type="button"
          className="bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm px-6 py-3 rounded-lg shadow-md hover:from-gray-800 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition duration-300"
        >
          View Blogs
        </button>
      </Link>
    </div>
  );
};

export default Home;