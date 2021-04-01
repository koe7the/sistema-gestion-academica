import React, { useState } from "react";
import "./NavBar.scss";
//LIBRERIA
import { Link } from "react-router-dom";
//HELPERS
import Routing from "../../helpers/Routing";
//ICONS
import SchoolIcon from "@material-ui/icons/School"; //icono de inicio
import PeopleIcon from "@material-ui/icons/People"; //alumnos
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"; //docentes
import HistoryIcon from "@material-ui/icons/History"; //periodos
import ClassIcon from "@material-ui/icons/Class"; //ubicacion
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"; //materias grados
import ScheduleIcon from "@material-ui/icons/Schedule"; //horarios
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const NavBarAdmin = () => {
  const { visitPage } = Routing();
  const deslogear = () => {
    localStorage.removeItem("auth-token");
  };

  return (
    <nav>
      <Link to="/" className="nav-index">
        <SchoolIcon className="nav-indexIcon" />
        <span className="nav-indexTitle">inicio</span>
      </Link>

      <ul className="nav-itemList">
        <li className="nav-item">
          <Link className="nav-itemLink">
            <PeopleIcon className="nav-linkIcon" />
            <span className="nav-linkTitle">elemento</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-itemLink">
            <PeopleIcon className="nav-linkIcon" />
            <span className="nav-linkTitle">elemento</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-itemLink">
            <PeopleIcon className="nav-linkIcon" />
            <span className="nav-linkTitle">elemento</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-itemLink">
            <PeopleIcon className="nav-linkIcon" />
            <span className="nav-linkTitle">elemento</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-itemLink">
            <PeopleIcon className="nav-linkIcon" />
            <span className="nav-linkTitle">elemento</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-itemLink">
            <PeopleIcon className="nav-linkIcon" />
            <span className="nav-linkTitle">elemento</span>
          </Link>
        </li>
      </ul>

      <MoreHorizIcon id="menuIcon" />
    </nav>
  );
};

export default NavBarAdmin;
