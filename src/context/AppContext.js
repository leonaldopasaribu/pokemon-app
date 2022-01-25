import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const idFormatter = (number) => String(number).padStart(3, "0");

  return (
    <AppContext.Provider
      value={{
        idFormatter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
