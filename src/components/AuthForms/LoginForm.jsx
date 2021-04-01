import React from "react";
import "./LoginForm.css";

import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();

  return (
    <div className="loginFormComponent">
      <span className="loginFormTitle">Iniciar sesion</span>

      <div className="signUpDiv">
        <h5>No cuentas con un usuario?</h5>
        <span
          id="signUpRedirect"
          onClick={() => {
            history.push("/registro");
          }}
        >
          Registrar usuario
        </span>
      </div>

      <form className="loginForm">
        <div className="inputsContainer">
          <div className="loginFormInput">
            <label htmlFor="">Numero de identificación</label>
            <input type="text" name="" />
          </div>
          <div className="loginFormInput">
            <label htmlFor="">Contraseña</label>
            <input type="text" name="" />
          </div>
        </div>
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
