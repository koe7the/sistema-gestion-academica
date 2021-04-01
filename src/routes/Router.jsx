import React from "react";
//LIBRERIAS
import { BrowserRouter } from "react-router-dom";
//RUTAS
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";

const Router = ({ loggStatus }) => {
  return (
    <BrowserRouter>
      {!loggStatus ? (
        <AuthRoutes />
      ) : loggStatus === "admin" ? (
        <AdminRoutes />
      ) : (
        <UserRoutes />
      )}
    </BrowserRouter>
  );
};

export default Router;
