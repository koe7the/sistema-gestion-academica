import React from "react";
//COMPONENTE
import LoginForm from "../../components/AuthForms/LoginForm";
import HomeBanner from "../../components/HomeBanner/HomeBanner";

const Login = () => {
  return (
    <div>
      <HomeBanner />
      <LoginForm />
    </div>
  );
};

export default Login;
