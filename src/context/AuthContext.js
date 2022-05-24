import React, { useEffect, useState, createContext, useContext } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Loading from "@/components/Loading";

export const AuthContext = createContext();

export const fetcher = (url) => fetch(url).then((r) => r.json());
const AuthProvider = (props) => {
  const router = useRouter();
  const {
    data: userSWR,
    error: errorSWR,
    isValidating,
    mutate,
  } = useSWR("/api/isLoggedIn", fetcher);

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  // const router = useRouter();
  const login = async (form) => {
    setLoading(true);
    try {
      const response = await fetch("/api/signIn", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data) {
        setUser(data?.user);
      }
      setLoading(false);
      return { data };
    } catch (error) {
      setLoading(false);
      return { error: error.message };
    }
  };

  const logout = async () => {
    setLoading(true);
    const response = await fetch("/api/logout", { method: "POST" });
    const data = await response.json();
    if (data.success) {
      setUser(null);
    }
    setLoading(false);
    return data;
  };

  const checkAuth = async () => {
    setLoading(true);
    // const { data: user, error, mutate } = useSWR("/api/isLoggedIn", fetcher);
    const response = await fetch("/api/isLoggedIn");
    const data = await response.json();
    if (data?.isLoggedIn && data?.user) {
      setUser(data.user);
    } else {
      setUser(null);
    }
    setLoading(false);
    return data?.isLoggedIn || false;
  };
  useEffect(() => {
    console.log("got here");
    checkAuth();
  }, []);
  const value = {
    user,
    userSWR,
    error,
    login,
    logout,
    loading,
    isValidating,
    errorSWR,
    setUser,
    checkAuth,
    setLoading,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
