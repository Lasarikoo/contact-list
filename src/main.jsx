import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // ← Este import es obligatorio
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
