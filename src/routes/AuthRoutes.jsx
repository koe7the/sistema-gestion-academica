import React from "react";
//LIBRERIAS
import { Route, Switch } from "react-router-dom";
//VISTAS
import Registro from "../views/Registro";
import Login from "../views/Login";

const AuthRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Registro} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default AuthRoutes;
