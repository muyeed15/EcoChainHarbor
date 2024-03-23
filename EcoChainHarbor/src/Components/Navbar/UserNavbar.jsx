import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { GiFarmer } from "react-icons/gi";
import { useState } from "react";

const UserNavbar = () => {
  const path = useLocation()
  console.log(path.pathname)
  const user =useParams()
  console.log(user.userId)
  const [cartVisible, setCartVisible] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Neil Sims",
      email: "email@flowbite.com",
      imageSrc: "/docs/images/people/profile-picture-1.jpg",
      amount: 320,
    },
    {
      id: 2,
      name: "Bonnie Green",
      email: "email@flowbite.com",
      imageSrc: "/docs/images/people/profile-picture-3.jpg",
      amount: 3467,
    },
    {
      id: 3,
      name: "Michael Gough",
      email: "email@flowbite.com",
      imageSrc: "/docs/images/people/profile-picture-2.jpg",
      amount: 67,
    },
    {
      id: 4,
      name: "Thomas Lean",
      email: "email@flowbite.com",
      imageSrc: "/docs/images/people/profile-picture-5.jpg",
      amount: 2367,
    },
    {
      id: 5,
      name: "Lana Byrd",
      email: "email@flowbite.com",
      imageSrc: "/docs/images/people/profile-picture-4.jpg",
      amount: 367,
    },
  ];

  const handleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div>
      <div className="navbar shadow-xl flex justify-between">
        <button className="btn btn-ghost text-xl font-bold text-black">
          <Link to="/" className="">
            <span className="text-green-400">EcoChain</span>Harbor
          </Link>
        </button>

        <div className="flex-none">
          {/* notification  */}
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

          <div className="relative dropdown dropdown-end">
            {/* cart button */}
            <div
              tabIndex={0}
              role="button"
              onClick={handleCart}
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            {/* cart items */}
            {cartVisible && (
              <ul className="absolute -inset-x-56 w-56  border-2 p-4 bg-slate-500 rounded-2xl shadow-lg shadow-emerald-300  max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={item.imageSrc}
                          alt={item.name}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {item.email}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${item.amount}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Login information */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="rounded-full">
                <GiFarmer size={35} color="#31C48D"></GiFarmer>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                // onClick={}
                  to={`/user/${user.userId}`}
                >
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user"}
                >
                  Dashboard
                </Link>
                {/* <Navli to='/user'>Dashboard</Navli> */}
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
