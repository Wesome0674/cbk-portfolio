"use client"; // Nécessaire pour tout composant interactif dans l'App Router

import React, { createContext, useState, useContext } from "react";

const NavContext = createContext();

export const Context = ({ children }) => {
  const [navVisibility, setNavVisibility] = useState(false);

  return (
    <NavContext.Provider value={{ navVisibility, setNavVisibility }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return context;
};
