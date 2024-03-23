import { Link } from "react-router-dom";

const handleSubmit = () => {
  console.log('ok');
};

const LoginForm = () => {
  return (
    <form className="absolute top-1/4 left-1/4 md:left-1/3  container mx-auto w-1/2 md:w-1/4 space-y-1 ">
      <label className=" md:input md:input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="#2B9771"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" className="grow rounded-xl" placeholder="Email" required />
      </label>
      <label className=" md:input md:input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="#9061F9"
          className="w-4 h-4 opacity-70"
        >
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 
           
          6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
          />
        </svg>
        <input type="text" className="grow rounded-xl" placeholder="Username" required />
      </label>
      <label className=" md:input md:input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="#D78F94"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="password" className="grow rounded-xl" placeholder="Password" required/>
      </label>
      {/* droopdown start*/}
      <label
        htmlFor="users"
        className="block m-2 text-sm font-medium text-white dark:text-white"
      >
        Select your type
      </label>
      <div className="flex">
        <select
          id="types"
          className="bg-gray-50 border m-2 border-emerald-400 text-black font-bold text-sm  rounded-lg focus:text-purple-600 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option className="font-semibold text-slate-900">Customer</option>
          <option className="font-semibold text-slate-900">Farmer</option>
          <option className="font-semibold text-slate-900">Vendor</option>
        </select>
        {/* dropdown finish */}
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="btn md:btn-circle text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-1/2 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link to="">Login</Link>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
