import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/navbar";
import SideBar from "../components/sidebar/SideBar";

function Layout() {
  return (
    <>
      <SideBar />
      <div className="">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
