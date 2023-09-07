// import reactDOM from 'react-dom';
import App from "./App";
import React from "react";
// reactDOM.render(<App/>,document.getElementById("root"));
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>);
