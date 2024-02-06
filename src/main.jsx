import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './Global.css'
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/context/auth-context.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </AuthContextProvider>
);
