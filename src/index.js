import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { App } from "./App";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
