import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import UserNavbar from "../Navbar/UserNavbar";
import Items from "../Items/Items";

const UserInfo = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === `/user/profile`;

  return (
    <div className="space-y-10">
      <UserNavbar></UserNavbar>
      {!isProfilePage && <Items></Items>}
      <Outlet></Outlet>
      {!isProfilePage ? <Footer display="static"></Footer> : <Footer display="absolute" ></Footer>}
    </div>
  );
};

export default UserInfo;
