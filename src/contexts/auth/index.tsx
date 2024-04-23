import { FC, createContext, useContext, useState } from 'react';
import { AuthContextProps, ChildrenType } from '../../interfaces';

const AuthContext = createContext<AuthContextProps>({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider :FC<ChildrenType> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token'));

  const login = (token: string) => {
    localStorage.setItem('token', token);
    console.log("arayyyyyyyyyyyyyyyyyyy", token)
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


