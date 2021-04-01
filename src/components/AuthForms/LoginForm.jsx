import React from "react";
import "./LoginForm.scss";

const LoginForm = () => {
  const logear = (e) => {
    e.preventDefault();
    localStorage.setItem("auth-token", "admin");
  };

  return (
    <div className="loginFormComponent">
      <span className="loginFormTitle">Iniciar sesion</span>

      <form onSubmit={logear} className="loginForm">
        <div className="loginForm-inputsContainer">
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
