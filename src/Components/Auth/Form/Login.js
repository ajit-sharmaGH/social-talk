import "./Form.css";
import socialTalkImg from "../../../Assets/navlogo.png";
import {
  BsFillSunFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
import { FaRegHandPointRight,FaRegHandPointLeft } from "react-icons/fa";
import { useTheme } from "../../../Context/ThemeContext";
import { useState } from "react";
const Login = () => {
  const { theme, modifyTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [loginLeft, setLoginLeft] = useState("40px");
  const [signupLeft, setSignupLeft] = useState("600px");

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
        <form className={`login-form-container`} style={{ left: loginLeft }}>
          <h3>Log In</h3>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="username"
            placeholder="Email"
            required
          />
          <label htmlFor="password">Password</label>
          <div className="password-input-box">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="*********"
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
          <button>Login</button>
          <button>Login as Guest</button>
          <hr className="mt-2" />
          <p className="flex-row-center" onClick={skipLoginFun}>
            Navigate to Sign Up <FaRegHandPointRight className="ml-half" />{" "}
          </p>
        </form>
        {/**Signup Form */}
        <form className={`signup-form-container`} style={{ left: signupLeft }}>
          <h3>Sign Up</h3>
          <div className="flex">
            <input type="text" placeholder="First Name" />
            &nbsp;&nbsp;
            <input type="text" placeholder="Last Name" />
          </div>
          <input
            type="email"
            id="signup_email"
            name="username"
            placeholder="Email"
            required
          />
          <div className="password-input-box">
            <input
              type={showPassword ? "text" : "password"}
              id="signup_password"
              name="password"
              placeholder="Enter Password"
              required
            />
            <input
              type={showPassword ? "text" : "password"}
              id="confirm_password"
              name="password"
              placeholder="Confirm Password"
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
          <button>Submit</button>
          <hr className="mt-2" />
          <p className="flex-row-center" onClick={skipSignupFun}>
          <FaRegHandPointLeft className="margin-half" />{" "}Navigate to Login In 
          </p>
        </form>
      </section>
    </div>
  );
};
export { Login };
