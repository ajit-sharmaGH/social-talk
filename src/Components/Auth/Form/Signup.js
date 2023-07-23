import "./Form.css";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useTheme } from "../../../Context/ThemeContext";
import { useMainContext } from "../../../Context/MainContext";
import { useAuth } from "../../../Context/AuthContext";
const Signup = () => {
  const [msg, setMsg] = useState("");
  const [signUpDetails, setSignUpDetails] = useState({
    _id: uuid(),
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    bookmarks: [],
    following: [],
    followers: [],
    profile_photo:
      "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
  });
  const { theme } = useTheme();
  const { SignupUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordFun = () => {
    setShowPassword(!showPassword);
  };
  const { dataDispatch } = useMainContext();

  const handleSignUpInput = (e) => {
    const { name, value } = e.target;
    console.log(`Input name: ${name}, Input value: ${value}`);
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const { firstName, lastName, username, password } = signUpDetails;

  const createAccount = () => {
    if (
      firstName &&
      lastName &&
      username &&
      password === document.getElementById("confirm_password").value
    ) {
      SignupUser(
        { ...signUpDetails, userHandler: `${firstName}` },
        dataDispatch
      );
    }else{
        setMsg("check password or input fields");
    }
  };

  const confirmPasswordHandler = (e) => {
    if (password !== e.target.value) {
      setMsg("password not matching");
    } else {
      setMsg(null);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`signup-form-container`}
      >
        <h3>Sign Up</h3>
        <div className="flex">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleSignUpInput}
            placeholder="First Name"
            required
          />
          &nbsp;&nbsp;
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleSignUpInput}
            placeholder="Last Name"
            required
          />
        </div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleSignUpInput}
          required
        />
        <div className="password-input-box">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={handleSignUpInput}
            required
          />
         
          <input
            id="confirm_password"
            type={showPassword ? "text" : "password"}
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={(e) => confirmPasswordHandler(e)}
            required
          />

          {showPassword ? (
            <BsFillEyeFill
              className={`fill-eye-icon ${theme && "fill-eye-icon-in-darkBg"}`}
              onClick={showPasswordFun}
            />
          ) : (
            <BsFillEyeSlashFill
              className={`fill-eye-icon ${theme && "fill-eye-icon-in-darkBg"}`}
              onClick={showPasswordFun}
            />
          )}
        </div>
        <button onClick={createAccount}>Create Account</button>
        <div className="password-msg"> {msg} </div>
        <hr className="mt-2" />
        
      </form>
    </>
  );
};
export { Signup };
