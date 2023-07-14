import "./App.css";
// import { Navbar } from "./Components/Navbar/Navbar";
import { ExplorePage } from "./Pages/ExplorePage/ExplorePage";
import { Route, Routes } from "react-router";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Login } from "./Components/Auth/Form/Login";
import { RequiresAuth } from "./Components/Auth/RequiresAuth/RequiresAuth";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      
      <Routes>
        <Route path="/" element={ <RequiresAuth><HomePage /></RequiresAuth> } />
        <Route path="/Explore" element={ <RequiresAuth> <ExplorePage /></RequiresAuth>} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
