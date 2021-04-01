import axios from "axios";

const Auth = () => {
  const getToken = () => {
    return localStorage.getItem("auth-token");
  };

  const setToken = (newToken) => {
    localStorage.setItem("auth-token", newToken);
  };

  const verifyToken = () => {
    if (localStorage.getItem("auth-token")) return true;
    return null;
  };

  const loginUser = (data) => {
    try {
      const response = axios.post("direccion", data);
      localStorage.setItem("auth-token", response.data);
    } catch (error) {
      console.log(error);
      if (error.response) console.log(error.response);
      if (error.request) console.log(error.request);
    }
  };

  const signupUser = (data) => {
    try {
      const response = axios.post("direccion", data);
      localStorage.setItem("auth-token", response.data);
    } catch (error) {
      console.log(error);
      if (error.response) console.log(error.response);
      if (error.request) console.log(error.request);
    }
  };

  return { getToken, setToken, verifyToken, loginUser, signupUser };
};

export default Auth;
