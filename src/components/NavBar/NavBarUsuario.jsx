import React from "react";
//LIBRERIAS
import { LinkContainer } from "react-router-bootstrap";
//COMPONENTES
import {
  Navbar,
  FormControl,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
//ICONS
import ScheduleIcon from "@material-ui/icons/Schedule";
import NoteIcon from "@material-ui/icons/Note";

const NavBarUsuario = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* nav links */}
          <LinkContainer to="/notas">
            <Nav.Link>
              <NoteIcon /> Mis notas
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/usuario">
            <Nav.Link>
              <ScheduleIcon /> Mis horarios
            </Nav.Link>
          </LinkContainer>

          {/* dropdown list */}
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* barra de busqueda */}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarUsuario;
