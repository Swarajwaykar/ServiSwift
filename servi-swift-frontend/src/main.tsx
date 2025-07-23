import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext"; // 👈
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="http://14337065239-m9mssg2dsvqjco0ien8pm1a9hjq9f4du.apps.googleusercontent.com">
     <ThemeProvider> {/* 👈 Wrap App */}
        <App />
      </ThemeProvider>
    </GoogleOAuthProvider>
     
  </React.StrictMode>
);
