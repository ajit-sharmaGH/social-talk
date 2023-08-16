import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { AuthContextProvider } from "./Context/AuthContext";
import { MainContextProvider } from "./Context/MainContext";
import { BookMarkContextProvider } from "./Context/BookmarkContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BookMarkContextProvider>
      <AuthContextProvider>
        <MainContextProvider>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </MainContextProvider>
      </AuthContextProvider>
      </BookMarkContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
