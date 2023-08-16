import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { initialState, mainReducer } from "../Reducer/MainReducer";
const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(mainReducer, initialState);
  const [searchedUser, setSearchedUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getAllPosts = async () => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.get("/api/posts");
      if (status === 200 || status === 201) {
        dataDispatch({ type: "INITIALIZE_POSTS", payload: posts });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllUsers = async () => {
    try {
      const {
        status,
        data: { users },
      } = await axios.get("/api/users");
      if (status === 200 || status === 201) {
        dataDispatch({ type: "INITIALIZE_USERS", payload: users });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllPosts();
    getAllUsers();
  }, []);

  return (
    <MainContext.Provider
      value={{
        getAllPosts,
        dataState,
        dataDispatch,
        setSearchedUser,
        searchedUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);
export { MainContextProvider, useMainContext };
