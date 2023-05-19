import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const login = async ({ idInstance, apiTokenInstance }) => {
    setIdInstance(() => idInstance);
    setApiTokenInstance(() => apiTokenInstance)
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, idInstance, apiTokenInstance }}>
      {children}
    </AuthContext.Provider>
  );
};