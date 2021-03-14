import React from "react";
//LIBRERIAS
import { Route, Switch } from "react-router-dom";
//COMPONENTES
import Home2 from "../views/Home2";
import NavBarUsuario from "../components/NavBar/NavBarUsuario";

const UserRoutes = () => {
  return (
    <div>
      <NavBarUsuario />
      <Switch>
        <Route path="/usuario" component={Home2} />
      </Switch>
    </div>
  );
};

export default UserRoutes;
