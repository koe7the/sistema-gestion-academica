import React, { createContext, useState } from "react";
const Context = createContext();

const AppContext = ({ children }) => {
  const [contextState, setContextState] = useState({ loggStatus: null });
  const value = { contextState, setContextState };

  return (
    <Context.Provider value={value}>
      {/*  */}
      {children}
    </Context.Provider>
  );
};

export { AppContext, Context };
