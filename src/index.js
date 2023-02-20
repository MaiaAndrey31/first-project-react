import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import GlobalStyle from "./GlobalStyles";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routes /> <GlobalStyle />
  </React.StrictMode>
);
