import React from "react";

import "./HomeBanner.css";
//COMPONENTES
import { Jumbotron, Container, Image } from "react-bootstrap";
//LOGO
import LOGO from "../../assets/logo.png";
//LIBRERIAS
import { useHistory } from "react-router-dom";

const HomeBanner = () => {
  const history = useHistory();
  return (
    <Jumbotron fluid className="homeBanner">
      <Container>
        <Image
          onClick={() => {
            history.push("/");
          }}
          src={LOGO}
          className="homeBannerLogo"
        />

        <h1 className="homeBannerTitle">Sistema de Gestion Academica</h1>
        <span className="homeBannerMessage">
          Sistema para la gestion de notas y alumnos en el liceo inventado
        </span>
      </Container>
    </Jumbotron>
  );
};

export default HomeBanner;
