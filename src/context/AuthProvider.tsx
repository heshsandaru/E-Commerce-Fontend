import { use, useState } from "react";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);
  const [role, setRole] = useState<string>("user");

  const login = (token: string, userRole: string) => {
    setIsLoggedIn(true);
    setAccessToken(token);
    setRole(userRole);
    
  }

  const logout = () => {
    setIsLoggedIn(false);
    setAccessToken("");
    setRole("user");
  }

  


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isAuthenticating, role}}>
      {children}
      </AuthContext.Provider>
  )
}