import React from "react";
//LIBRERIAS
import { Route, Switch } from "react-router-dom";
//COMPONENTES
import Home from "../views/Home";
import NavBarAdmin from "../components/NavBar/NavBarAdmin";

const AdminRoutes = () => {
  return (
    <div>
      <NavBarAdmin />
      <Switch>
        {/* RUTAS DE PRUEBAS */}
        <Route path="/admin" component={Home} />
      </Switch>
    </div>
  );
};

export default AdminRoutes;
