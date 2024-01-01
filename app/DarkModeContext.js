"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  // localStorage.setItem("darky", "false");
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // const storedDarkMode=localStorage.getItem('darky')
    return JSON.parse(localStorage.getItem("darky")) || true;
    // return storedDarkMode ?JSON.parse(storedDarkMode):false
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  
 

  return (
    // <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
