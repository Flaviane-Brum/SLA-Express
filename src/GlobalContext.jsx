import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [sucesso, setSucesso] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        setSucesso,
        sucesso,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export function useAppContext() {
  return useContext(GlobalContext);
}
