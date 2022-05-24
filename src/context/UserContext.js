import React, { useEffect, useState, createContext } from "react";
import { AuthService } from "@/service/AuthService";

export const UserContext = createContext();

export const AuthProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const login = async (form) => {
    setLoading(true);
    console.log(form);

    try {
      const response = await fetch("/api/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data) {
        setUser(data?.user);
      }
      console.log({ data });
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      return { error: error.message };
    }
  };

  const getUser = async () => {
    setLoading(true);
    const response = await fetch("/api/isLoggedIn");
    const data = await response.json();

    if (data?.isLoggedIn && data?.user) {
      setUser(data.user);
    }
    setLoading(false);
    return user || null;
  };

  useEffect(() => {
    getUser();
  }, []);
  const value = {
    user,
    error,
    loading,
    setUser,
    getUser,
    setLoading,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContext;
