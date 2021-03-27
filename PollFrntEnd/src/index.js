import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mountNode = document.createElement("root");
document.body.appendChild(mountNode);

ReactDOM.render(<App />, mountNode);
