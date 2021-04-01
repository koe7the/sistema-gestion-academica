import React, { useState } from "react";
//COMPONENTES
import SignUpForm from "../../components/AuthForms/SignUpForm";
import HomeBanner from "../../components/HomeBanner/HomeBanner";

const Registro = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <HomeBanner />
      <SignUpForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Registro;
