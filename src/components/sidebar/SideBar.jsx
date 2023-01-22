import "./sidebar.scss";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import ClosedCaptionOffOutlinedIcon from "@mui/icons-material/ClosedCaptionOffOutlined";
import { NavLink } from "react-router-dom";
import { useThemeContextProvider } from "../../context/ThemeContext";
import { useAuthContext } from "../../context/AuthContext";

function SideBar() {
  const { themeMode } = useThemeContextProvider();
  const { logout } = useAuthContext();
  const mode = themeMode.isDarkMode ? "dark" : "";

  const handleLogout = async function () {
    await logout();
  };

  return (
    <aside className={`sidebar ${mode}`}>
      <div className="logo">
        <span>Ivanadmin</span>
      </div>

      <ul className="center">
        <p className="title">main</p>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "activeClassName" : "")}
        >
          <li>
            <DashboardIcon className="icon" />
            <span>DashBord</span>
          </li>
        </NavLink>

        <p className="title">List</p>
        <NavLink
          to={"/users"}
          className={({ isActive }) => (isActive ? "activeClassName" : "")}
        >
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
        </NavLink>

        <NavLink
          to={"/product"}
          className={({ isActive }) => (isActive ? "activeClassName" : "")}
        >
          <li>
            <ProductionQuantityLimitsOutlinedIcon className="icon" />
            <span>Products</span>
          </li>
        </NavLink>

        <li>
          <ClosedCaptionOffOutlinedIcon className="icon" />
          <span>Orders</span>
        </li>
        <li>
          <LocalShippingOutlinedIcon className="icon" />
          <span>Delivery</span>
        </li>
        <p className="title">Useful</p>
        <li>
          <BarChartOutlinedIcon className="icon" />
          <span>Stats</span>
        </li>
        <li>
          <NotificationsOutlinedIcon className="icon" />
          <span>Notifications</span>
        </li>
        <p className="title">Service</p>
        <li>
          <SettingsApplicationsOutlinedIcon className="icon" />
          <span>System Health</span>
        </li>
        <li>
          <SettingsApplicationsOutlinedIcon className="icon" />
          <span>Logs</span>
        </li>
        <li>
          <SettingsApplicationsOutlinedIcon className="icon" />
          <span>Settings</span>
        </li>
        <p className="title">USER</p>
        <li>
          <LoginOutlinedIcon className="icon" />
          <span>Profile</span>
        </li>

        <li onClick={handleLogout}>
          <LoginOutlinedIcon className="icon" />
          <span>Logout</span>
        </li>
      </ul>
      <p className="title">Theme</p>
      <div className="bottom">
        <div />
        <div />
      </div>
    </aside>
  );
}

export default SideBar;
