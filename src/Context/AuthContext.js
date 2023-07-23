import { createContext, useState, useContext } from "react";
import axios from "axios";
import {  useNavigate } from "react-router";
import { success, warning } from "../Pages/Services/ToastService";
const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const getToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(getToken ? true : false);

  const LoginUser = async (credentials) => {
    try {
      const {
        status,
        data: { encodedToken, foundUser },
      } = await axios.post("/api/auth/login", {
        ...credentials,
      });
      if (status === 200 || status === 201) {
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("users", JSON.stringify(foundUser));
        setIsLoggedIn(true);
        success(`Login Successfully`);
        navigate("/");
      }
    } catch (error) {
      console.log(error)
      warning("Account Doesn't Exist!");
    }
  };

  const SignupUser = async (credentials,dataDispatch) => {
    try {
      const {
        status,
        data: { encodedToken, createdUser },
      } = await axios.post("/api/auth/signup", {
        ...credentials,
      });

      if (status === 200 || status === 201) {
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("users", JSON.stringify(createdUser));
        dataDispatch({ type: "ADD_USERS", payload: createdUser })
        setIsLoggedIn(true);
        navigate("/");
        success("Sign Up Successfully");
      }
    } catch (e) {
      console.log(e);
      warning("Username Already Exists");
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, LoginUser, SignupUser, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthContextProvider, useAuth };
