import { createContext, useContext, useState } from "react";
import { AuthService } from "../service/AuthService";

const AuthContext = createContext();

export default function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const loginWithCredentials = async () => {
    const { error, user } = await AuthService.loginWithCredentials();
    setUser(user ?? null);
    setError(error ?? "");
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  const checkAuth = async () => {
    await AuthService.checkAuth();
    setUser(null);
  };
  const value = {
    user,
    error,
    loginWithCredentials,
    logout,
    setUser,
    checkAuth,
  };

  return <AuthContext.Provider value={value} {...props} />;
}
