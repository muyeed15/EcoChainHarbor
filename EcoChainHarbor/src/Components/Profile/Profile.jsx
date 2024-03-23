import { Outlet, useLoaderData } from "react-router-dom";
import UserNavbar from "../Navbar/UserNavbar";
import { Footer } from "flowbite-react";

const Profile = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div className="space-y-10">
      <UserNavbar></UserNavbar>
      <Outlet></Outlet>
      <Footer display="absolute"></Footer>
    </div>

    // <div className="top-[50%] container mx-auto text-center h-[100vh-48px-178px] flex flex-col justify-center items-center bg-no-repeat bg-contain bg-center">
    //   <h1>Your profile id : {user.id}</h1>
    //   <h2>Name: {user.name}</h2>
    //   <h2>Email: {user.email}</h2>
    //   <h2>Username: {user.username}</h2>
    //   <div>
    //     <h1 className="underline">Personal Information</h1>
    //     <p>Company: {user.company.name} <br /> Website: {user.website} <br /> Address: {user.address.street},{user.address.suite},{user.address.city} </p>
    //   </div>
    // </div>
  );
};

export default Profile;
