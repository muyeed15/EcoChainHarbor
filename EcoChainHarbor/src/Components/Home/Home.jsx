import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <UserNavbar></UserNavbar> */}
      <div className="min-h-[calc(100vh-48px-178px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
