import React, { createContext, useState } from 'react';


export const EmissionContext = createContext();

export const EmissionProvider = ({ children }) => {
  const [emissionData, setEmissionData] = useState({
    coal: 0,
    methane: 0,
    renewable: 0,
    trees: 0
  });

  return (
    <EmissionContext.Provider value={{ emissionData, setEmissionData }}>
      {children}
    </EmissionContext.Provider>
  );
};
