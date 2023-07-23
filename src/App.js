import "./App.css";
// import { Navbar } from "./Components/Navbar/Navbar";
import { ExplorePage } from "./Pages/ExplorePage/ExplorePage";
import { Route, Routes } from "react-router";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Login } from "./Components/Auth/Form/Login";
import { RequiresAuth } from "./Components/Auth/RequiresAuth/RequiresAuth";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMainContext } from "./Context/MainContext";
import { Loader } from "./Components/Loader/Loader";

function App() {
  const { isLoading } = useMainContext();
  return (
    <div>
      {/* <Navbar /> */}
      {isLoading && <Loader />}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequiresAuth>
              <HomePage />
            </RequiresAuth>
          }
        />
        <Route path="/mockman" element={<Mockman />} />

        <Route
          path="/Explore"
          element={
            <RequiresAuth>
              {" "}
              <ExplorePage />
            </RequiresAuth>
          }
        />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
