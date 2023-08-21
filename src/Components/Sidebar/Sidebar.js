import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { FaWpexplorer } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import { NavLink } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import { useAuth } from "../../Context/AuthContext";
import { warning } from "../../Pages/Services/ToastService";
import { useBookMark } from "../../Context/BookmarkContext";
import { useMainContext } from "../../Context/MainContext";
const Sidebar = () => {
  const { theme } = useTheme();
  const { setIsLoggedIn } = useAuth();
  const { bookmark } = useBookMark();
  const {
    dataState: { users },
  } = useMainContext();
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
  const loginUser = JSON.parse(localStorage.getItem("socialUsers"));

  const loggedInUser = users?.find(
    (user) => user.username === loginUser.username
  );

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("socialUsers");
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
          <div className="flex-center">
            <AiFillHome />
            &nbsp; <span>Home</span>{" "}
          </div>
        </NavLink>

        <NavLink
          to="/Explore"
          style={getActiveColor}
          className={`navLink-decoration navLink-sidebar ${
            theme && "navLink-in-darkBg"
          }`}
        >
          <div className="flex-center">
            <FaWpexplorer />
            &nbsp; <span>Explore</span>{" "}
          </div>
        </NavLink>

        <NavLink
          to="/Bookmarks"
          style={getActiveColor}
          className={`navLink-decoration navLink-sidebar ${
            theme && "navLink-in-darkBg"
          }`}
        >
          {bookmark.length > 0 ? (
            <>
              Bookmarked &nbsp;<small>{`[ ${bookmark.length} ]`}</small>
            </>
          ) : (
            <div className="flex-center">
              <BsBookmarksFill />
              &nbsp; <span>Bookmarks</span>{" "}
            </div>
          )}
        </NavLink>

        <NavLink
          onClick={handleLogout}
          className={`navLink-decoration navLink-sidebar ${
            theme && "navLink-in-darkBg"
          }`}
        >
          <div className="flex-center">
            <BiLogOut />
            &nbsp; <span>Log Out</span>{" "}
          </div>
        </NavLink>
      </nav>
      <NavLink
        to="/Profile"
        style={getActiveColor}
        className={`navLink-decoration flex navLink-sidebar ${
          theme && "navLink-in-darkBg"
        }`}
      >
        <img
          src={loggedInUser?.profile_photo}
          className="profile-img mr-1"
          alt=""
        />
        <aside>
          <h4>
            {loggedInUser?.firstName} {loggedInUser?.lastName}
          </h4>
          <small>@{loggedInUser?.userHandler} </small>
        </aside>
      </NavLink>
    </div>
  );
};
export { Sidebar };
