import React from "react";
import { useHistory } from "react-router-dom";
//COMPONENTES
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
//ICONS
import SchoolIcon from "@material-ui/icons/School"; //icono de inicio
import PeopleIcon from "@material-ui/icons/People"; //alumnos
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"; //docentes
import HistoryIcon from "@material-ui/icons/History"; //periodos
import ClassIcon from "@material-ui/icons/Class"; //ubicacion
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"; //materias grados
import ScheduleIcon from "@material-ui/icons/Schedule"; //horarios

const NavBarAdmin = () => {
  const history = useHistory();

  const doHash = (e) => {
    history.push(e.target.id);
  };

  return (
    <Navbar fixed="top" sticky="top" bg="dark" variant="dark">
      <Navbar.Brand id="/" onClick={doHash}>
        <SchoolIcon />
        <span>Inicio</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Alumnos */}
          <NavDropdown
            title={
              <span>
                <PeopleIcon />
                Alumnos
              </span>
            }
          >
            <NavDropdown.Item id="/registro-alumno" onClick={doHash}>
              Registro de Alumnos
            </NavDropdown.Item>
            <NavDropdown.Item id="/documentos" onClick={doHash}>
              Documentos
            </NavDropdown.Item>
            <NavDropdown.Item id="/calificaciones" onClick={doHash}>
              Calificaciones Periodo-Grado
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <span>
                <AssignmentIndIcon /> Docentes
              </span>
            }
          >
            <NavDropdown.Item id="/gestion-docentes" onClick={doHash}>
              Gestion de Docentes
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <span>
                <HistoryIcon /> Periodos
              </span>
            }
          >
            <NavDropdown.Item id="/gestion-peridos" onClick={doHash}>
              Gestion de Periodos
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <span>
                <ClassIcon />
                Ubicacion
              </span>
            }
          >
            <NavDropdown.Item id="/grados" onClick={doHash}>
              Grados
            </NavDropdown.Item>
            <NavDropdown.Item id="/aulas" onClick={doHash}>
              Aulas
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <span>
                <LibraryBooksIcon />
                Materias-Grados
              </span>
            }
          >
            <NavDropdown.Item id="/gestion-materias" onClick={doHash}>
              Gestion de Materias
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <span>
                <ScheduleIcon /> Horarios
              </span>
            }
          >
            <NavDropdown.Item id="horarios" onClick={doHash}>
              Horarios de clases
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarAdmin;
