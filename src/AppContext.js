import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [opacity, setOpacity] = useState(0);
  const [txtOp, setTxtOp] = useState(0);

  return (
    <AppContext.Provider value={{ opacity, setOpacity, txtOp, setTxtOp }}>
      {children}
    </AppContext.Provider>
  );
};
