import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { FaWpexplorer } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

import { NavLink } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import { useAuth } from "../../Context/AuthContext";
import { warning } from "../../Pages/Services/ToastService";
const Sidebar = () => {
  const { theme } = useTheme();
  const { setIsLoggedIn } = useAuth();
  const getActiveColor = ({ isActive }) => {
    if (theme) {
      return {
        backgroundColor: isActive && "#121212",
        color: isActive && " #FAFAFA",
      };
    } else {
      return {
        backgroundColor: isActive && "#00000144",
        color: isActive && " #fafafa",
      };
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("socialToken");
    localStorage.removeItem("users");
    warning("Logged Out");
  };
  return (
    <div className="sidebar-container">
      <nav className="flex-col-align-center">
        <NavLink
          to="/"
          style={getActiveColor}
          className={`navLink-decoration navLink-sidebar ${
            theme && "navLink-in-darkBg"
          }`}
        >
          <AiFillHome /> Home
        </NavLink>

        <NavLink
          to="/Explore"
          style={getActiveColor}
          className={`navLink-decoration navLink-sidebar ${
            theme && "navLink-in-darkBg"
          }`}
        >
          <FaWpexplorer /> Explore
        </NavLink>

        <NavLink
          to="/Bookmarks"
          style={getActiveColor}
          className={`navLink-decoration navLink-sidebar ${
            theme && "navLink-in-darkBg"
          }`}
        >
          <BsBookmarksFill /> Bookmarks
        </NavLink>

        <NavLink
          to="/Profile"
          style={getActiveColor}
          className={`navLink-decoration navLink-sidebar ${
            theme && "navLink-in-darkBg"
          }`}
        >
          <MdAccountCircle /> Profile
        </NavLink>
        <NavLink
          onClick={handleLogout}
         
          className={`navLink-decoration navLink-sidebar ${
            theme && "navLink-in-darkBg"
          }`}
        >
          <BiLogOut /> Log Out
        </NavLink>
      </nav>
      <NavLink
        to="/Profile"
        style={getActiveColor}
        className={`navLink-decoration flex navLink-sidebar ${
          theme && "navLink-in-darkBg"
        }`}
      >
        <div className="profile-img"></div>
        <aside>
          <h4>Ajit Sharma</h4>
          <small>@itsAjitSharma</small>
        </aside>
      </NavLink>
    </div>
  );
};
export { Sidebar };