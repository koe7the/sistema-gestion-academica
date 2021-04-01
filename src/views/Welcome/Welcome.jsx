import React from "react";
import "./Welcome.scss";
//COMPONENTES
import HomeBanner from "../../components/HomeBanner/HomeBanner";
//LIBRERIAS
//HELPERS
import Routing from "../../helpers/Routing";

const Welcome = () => {
  const { visitPage } = Routing();

  return (
    <div>
      <HomeBanner />
      <div className="welcome-optionsDiv">
        <div
          onClick={() => {
            visitPage("/login");
          }}
          className="welcome-option"
        >
          <span className="option">ir a login</span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
