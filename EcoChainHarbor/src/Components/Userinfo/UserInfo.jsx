import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import UserNavbar from "../Navbar/UserNavbar";

const UserInfo = () => {
  return (
    <div>
      <UserNavbar></UserNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default UserInfo;
