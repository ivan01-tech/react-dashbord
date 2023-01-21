import "./navbar.scss";
import image from "../../assets/images.jpeg";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import {
  TOOGLE_MODE,
  useThemeContextProvider,
} from "../../context/ThemeContext";

function Navbar() {
  const { themeMode, dispatch } = useThemeContextProvider();
  const mode = themeMode.isDarkMode ? "dark" : "";

  return (
    <nav>
      <div className="input">
        <div>
          <input type="text" placeholder="Search here..." className={mode} />
          <SearchOutlinedIcon />
        </div>
      </div>
      <div className="utils">
        <div>
          <LanguageOutlinedIcon />
          <span>English</span>
        </div>
        <div
          className="toogle-mode"
          onClick={() => dispatch({ type: TOOGLE_MODE })}
        >
          <span>
            {mode ? (
              <WbSunnyOutlinedIcon style={{ color: "orange" }} />
            ) : (
              <DarkModeRoundedIcon />
            )}
          </span>
        </div>
        <div className="notification">
          <NotificationsOutlinedIcon />
          <span>1</span>
        </div>
        <div className="notification">
          <CommentOutlinedIcon />
          <span>2</span>
        </div>
        <div>
          <ListOutlinedIcon />
        </div>
        <div>
          <SettingsOutlinedIcon />
        </div>
        <div>
          <img src={image} alt="" />
          <ArrowDropDownOutlinedIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
