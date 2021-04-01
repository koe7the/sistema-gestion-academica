import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//CONTEXTO
import { AppContext } from "./AppContext";

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById("root")
);
