import React from "react";
import "./SignUpForm.css";
import { useHistory } from "react-router-dom";

const SignUpForm = ({ handleChange, handleSubmit }) => {
  const history = useHistory();
  return (
    <div className="signUpFormComponent">
      <span className="formTitle">Registro de usuario</span>
      <div className="loginDiv">
        <h5>Ya cuentas con un usuario?</h5>
        <span
          id="loginRedirect"
          onClick={() => {
            history.push("/login");
          }}
        >
          Iniciar sesion
        </span>
      </div>

      <form className="signUpForm">
        <div className="inputsContainer">
          <div className="signUpFormInput">
            <label htmlFor="">campo</label>
            <input type="text" name="" />
          </div>
          <div className="signUpFormInput">
            <label htmlFor="">campo</label>
            <input type="text" name="" />
          </div>
        </div>

        <button>Registrar</button>
      </form>
    </div>
  );
};

export default SignUpForm;
