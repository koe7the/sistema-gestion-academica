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
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const NavBarAdmin = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* nav links */}
          <LinkContainer to="/admin">
            <Nav.Link>
              <SupervisorAccountIcon /> admin
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/usuario">
            <Nav.Link>
              <AccountCircleIcon /> user
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/registro">
            <Nav.Link>registro</Nav.Link>
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

export default NavBarAdmin;
