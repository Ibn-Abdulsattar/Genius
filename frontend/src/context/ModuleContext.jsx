import React, { createContext, useContext, useState } from "react";

const ModuleContext = createContext();
export function ModuleProvider({children}) {
  const [reviewModel, setReviewModel] = useState(false);
  return (
    <ModuleContext.Provider value={{ reviewModel, setReviewModel }}>
      {children}
    </ModuleContext.Provider>
  );
}

export const useModule = () => useContext(ModuleContext);
