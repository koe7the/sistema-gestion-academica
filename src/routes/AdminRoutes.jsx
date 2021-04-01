import React from "react";
//LIBRERIAS
import { Route, Switch } from "react-router-dom";
//COMPONENTES
import NavBarAdmin from "../components/NavBar/NavBarAdmin";

//VISTAS-------------->
import Inicio from "../views/Admin/Inicio";
//Alumnos
import RegistroAlumnos from "../views/Admin/Alumnos/RegistroAlumnos";
import Documentos from "../views/Admin/Alumnos/Documentos";
import Calificaciones from "../views/Admin/Alumnos/Calificaciones";
//Docentes
import GestionDocentes from "../views/Admin/Docentes/GestionDocentes";
//Periodos
import GestionPeriodos from "../views/Admin/Periodos/GestionPeriodos";
//Ubicacion
import Aulas from "../views/Admin/Ubicacion/Aulas";
import Grados from "../views/Admin/Ubicacion/Grados";
//Materias-grados
import GestionMaterias from "../views/Admin/MateriasGrados/GestionMaterias";
//Horarios
import HorarioClases from "../views/Admin/Horarios/HorarioClases";

const AdminRoutes = () => {
  return (
    <div>
      <NavBarAdmin />
      <div className="contentBody">
        <Switch>
          <Route exact path="/" component={Inicio} />
          {/* RUTAS DE ALUMNOS */}
          <Route exact path="/registro-alumno" component={RegistroAlumnos} />
          <Route exact path="/documentos" component={Documentos} />
          <Route exact path="/calificaciones" component={Calificaciones} />
          {/* RUTAS DE DOCENTES */}
          <Route exact path="/gestion-docentes" component={GestionDocentes} />
          {/* RUTAS DE PERIODOS */}
          <Route exact path="/gestion-periodos" component={GestionPeriodos} />
          {/* RUTAS DE UBICACION */}
          <Route exact path="/aulas" component={Aulas} />
          <Route exact path="/grados" component={Grados} />
          {/* RUTAS DE MATERIAS-GRADOS */}
          <Route exact path="/gestion-materias" component={GestionMaterias} />
          {/* RUTAS DE HORARIOS */}
          <Route exact path="/horarios" component={HorarioClases} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminRoutes;
