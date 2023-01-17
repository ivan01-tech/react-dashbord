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

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span>Ivan01-Admin</span>
      </div>
      <hr />
      <ul className="center">
        <p className="title">main</p>
        <li>
          <DashboardIcon className="icon" />
          <span>DashBord</span>
        </li>
        <p className="title">List</p>
        <li>
          <PersonOutlineOutlinedIcon className="icon" />
          <span>Users</span>
        </li>
        <li>
          <ProductionQuantityLimitsOutlinedIcon className="icon" />
          <span>Products</span>
        </li>
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
        <li>
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
