import React from "react";
//LIBRERIAS
import { Route, Switch } from "react-router-dom";
//COMPONENTES
import NavBarUsuario from "../components/NavBar/NavBarUsuario";

const UserRoutes = () => {
  return (
    <div>
      <NavBarUsuario />
      <div className="contentBody">
        <Switch></Switch>
      </div>
    </div>
  );
};

export default UserRoutes;
