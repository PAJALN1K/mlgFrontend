import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

const container = document.getElementById("Root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
