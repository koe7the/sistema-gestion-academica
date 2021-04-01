import React from "react";
//VISTAS
import Registro from "../views/Auth/Registro";
import Login from "../views/Auth/Login";
import Welcome from "../views/Welcome/Welcome";
//LIBRERIAS
import { Route, Switch } from "react-router-dom";

const AuthRoutes = () => {
  return (
    <div className="contentBody">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Registro} />
      </Switch>
    </div>
  );
};

export default AuthRoutes;
