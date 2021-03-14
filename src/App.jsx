import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//RUTAS PARA LOS ROLES
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import AuthRoutes from "./routes/AuthRoutes";
//LIBRERIAS
import { BrowserRouter } from "react-router-dom";
//HOOK
import useCredenciales from "./hooks/useCredenciales";

const App = () => {
  /* este hook retorna las credenciales del usuario alojado en el localstorage */
  const { credenciales } = useCredenciales();

  /**
   * La idea para el routing por roles, es que las rutas login y signup siempre van a
   * estar establecidas, pero el componente de app verificara siempre que es renderizado
   * si hay credenciales y de que tipo son, para entonces habilitar las rutas segun las
   * credenciales.
   *
   *
   * las credenciales seran guardadas en el localstorage.
   */

  return (
    <BrowserRouter>
      {/* Esta sentencia valida el tema de los switch de las rutas TODO: arreglar sentencias*/}
      {!credenciales ? (
        <AuthRoutes />
      ) : credenciales.rol === "admin" ? (
        <AdminRoutes />
      ) : (
        <UserRoutes />
      )}
    </BrowserRouter>
  );
};

export default App;
