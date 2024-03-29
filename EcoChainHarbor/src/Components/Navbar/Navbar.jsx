import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[68px]">
      <div className="navbar bg-base-100 fixed shadow-lg">
        <div className="flex-1">
          <button className="btn btn-ghost text-xl font-bold text-black">
            <Link to="/" className="">
              <span className="text-green-400">EcoChain</span>Harbor
            </Link>
          </button>
        </div>
        <div className="flex-none">
          {/* notification  */}
          <div className="navbar-end flex flex-wrap space-y-4 md:flex-grow md:space-y-0 ">
            <button className={`w-32 ${''} `}>
              <Link to="/login"
                class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Login
                </span>
              </Link>
            </button>
            <button className={`w-32 ${''} `}>
              <Link to="/signup"
                class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Sign Up
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
