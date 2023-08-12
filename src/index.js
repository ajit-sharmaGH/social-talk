import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { AuthContextProvider } from "./Context/AuthContext";
import { MainContextProvider } from "./Context/MainContext";
import { PostContextProvider } from "./Context/PostContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <MainContextProvider>
          <ThemeContextProvider>
            <PostContextProvider>
            <App />
            </PostContextProvider>
          </ThemeContextProvider>
        </MainContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
