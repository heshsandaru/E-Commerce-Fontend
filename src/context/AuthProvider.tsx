import { useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useState<string>("");
    const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
    const [role, setRole] = useState<string>("user");


    return (
        
    )
}