import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-3NW9G16D1F");

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
