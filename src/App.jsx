import React, { useEffect, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//HELPERS
import Auth from "./helpers/Auth";
//ROUTER
import Router from "./routes/Router";
//CONTEXTO
import { Context } from "./AppContext";

const App = () => {
  const { contextState, setContextState } = useContext(Context);
  const authData = Auth().getToken();

  useEffect(() => {
    if (!authData) setContextState({ loggStatus: false });
    else setContextState({ loggStatus: "admin" });
  }, []);

  return <Router loggStatus={contextState.loggStatus} />;
};

export default App;
