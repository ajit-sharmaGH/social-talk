import "./Form.css";
import socialTalkImg from "../../../Assets/navlogo.png";
import {
  BsFillSunFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
import { FaRegHandPointRight, FaRegHandPointLeft } from "react-icons/fa";
import { useTheme } from "../../../Context/ThemeContext";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { LoginUser } from "../../../Context/LoginCheck.js";
import { useAuth } from "../../../Context/AuthContext";
import { Signup } from "./Signup";
const Login = () => {
  const { theme, modifyTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [loginLeft, setLoginLeft] = useState("40px");
  const [signupLeft, setSignupLeft] = useState("600px");

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const { LoginUser } = useAuth();
  const { username, password } = login;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handleLoginClick = () => {
    if (username && password) {
      LoginUser({ username, password });
    }
  };
  const handleGuestLogin = () => {
    const credentials = { username: "ajitTesting@gmail.com", password: "200" };
    setLogin({ ...credentials });
    LoginUser(credentials);
  };

  /** navigating to sign up form */
  const skipLoginFun = () => {
    setSignupLeft("40px");
    setLoginLeft("-600px");
  };
  
  /** navigating to Login  form */
  const skipSignupFun = () => {
    setLoginLeft("40px");
    setSignupLeft("600px");
  };

  const showPasswordFun = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`login-body  ${theme}`}>
      <section className="login-form-section-one">
        <div className="flex-center">
          <img
            src={socialTalkImg}
            alt="social talk"
            className="login-form-img mr-1"
          />{" "}
          <h3>Social Talk</h3>
        </div>
        <p>
          Social Talk allows users to follow other accounts and receive updates
          from them in their timeline. Users can like, retweet, and reply to
          tweets, fostering conversations and engagement.
        </p>
      </section>
      <section className={`login-form-section-two`}>
        <span onClick={modifyTheme}>
          {theme ? <BsFillSunFill /> : <BiSolidMoon />}
        </span>
        {/** from here to.... */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className={`login-form-container`}
          style={{ left: loginLeft }}
        >
          <h3>Log In</h3>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Password</label>
          <div className="password-input-box">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="*********"
              value={password}
              onChange={handleInputChange}
              required
            />
            {showPassword ? (
              <BsFillEyeFill
                className={`fill-eye-icon ${
                  theme && "fill-eye-icon-in-darkBg"
                }`}
                onClick={showPasswordFun}
              />
            ) : (
              <BsFillEyeSlashFill
                className={`fill-eye-icon ${
                  theme && "fill-eye-icon-in-darkBg"
                }`}
                onClick={showPasswordFun}
              />
            )}
          </div>
          <button onClick={handleLoginClick}>Login</button>
          <button onClick={handleGuestLogin}>Login as Guest</button>
          <hr className="mt-2" />
          <p className="flex-row-center" onClick={skipLoginFun}>
            Navigate to Sign Up <FaRegHandPointRight className="ml-half" />{" "}
          </p>
        </form>
        {/**Signup Form */}
        <div className="signup-component" style={{ left: signupLeft }}>
          <Signup />
          <p
            className="flex-row-center margin-1 cursor fs-large"
            onClick={skipSignupFun}
          >
            <FaRegHandPointLeft className="margin-half" /> Navigate to Login In
          </p>
        </div>
      </section>
    </div>
  );
};
export { Login };
