import { createContext, useContext, useState } from "react";

const GlobalArrayContext = createContext();

export const useGlobalArrayContext = () => {
  return useContext(GlobalArrayContext);
};

export const GlobalArrayProvider = ({ children }) => {
  const [globalArray, setGlobalArray] = useState([]);

  const addData = (data) => {
    setGlobalArray([...globalArray, data]);
  };

  return (
    <GlobalArrayContext.Provider value={{ globalArray, addData }}>
      {children}
    </GlobalArrayContext.Provider>
  );
};

export default GlobalArrayProvider;
