import { createContext, useState, useContext } from "react";

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = ()=>useContext(AuthContext);
export { AuthContextProvider, useAuth };
