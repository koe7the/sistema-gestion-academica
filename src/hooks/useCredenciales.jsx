import { useState } from "react";
/**
 * este hook se encargara de validar si en el localstorage hay credenciales
 * de autenticacion, en tal caso de que no haya, te retorna null.
 */

const useIsLoged = () => {
  const [credenciales, setCredenciales] = useState({
    rol: localStorage.getItem("rol"),
  });

  return { credenciales, setCredenciales };
};

export default useIsLoged;
