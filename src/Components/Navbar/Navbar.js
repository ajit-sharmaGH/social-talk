import "./Navbar.css";
import { NavLink } from "react-router-dom";
import navLogo from "../../Assets/navlogo.png";

import { BsFillSunFill } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
import { MdOutlinePersonSearch } from "react-icons/md";
import { useTheme } from "../../Context/ThemeContext";
const Navbar = () => {
  const { modifyTheme, theme } = useTheme();
  return (
    <div className={`navbar-container ${theme && "navbar-darkBg-color"}`}>
      <NavLink
        to="/"
        className={`flex-center navLink-decoration ${
          theme && "navLink-in-darkBg"
        }`}
      >
        <img src={navLogo} className="navbar-logo mr-1" alt="logo" />
        <h3>Social Talk</h3>
      </NavLink>
      <section className="search-container">
        <input
          type="text"
          placeholder="search users..."
          className={`${theme && "search-input-dark"}`}
        />
        <span>
          <MdOutlinePersonSearch className={`${theme && "search-user-icon"}`} />
        </span>
      </section>

      <p onClick={modifyTheme}>{theme ? <BsFillSunFill /> : <BiSolidMoon />}</p>
    </div>
  );
};
export { Navbar };
