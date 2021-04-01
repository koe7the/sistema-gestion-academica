import React from "react";
//COMPONENTES
import HomeBanner from "../../components/HomeBanner/HomeBanner";
//LIBRERIAS
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();

  return (
    <div>
      <HomeBanner />
      <p>cosas</p>
      <span
        onClick={() => {
          history.push("/registro");
        }}
      >
        ir a registro
      </span>
      <br />
      <span
        onClick={() => {
          history.push("/login");
        }}
      >
        ir a login
      </span>
    </div>
  );
};

export default Welcome;
