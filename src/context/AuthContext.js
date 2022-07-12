import React, { useEffect, useState, createContext, useContext } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

export const AuthContext = createContext();

export const fetcher = (url) =>
  fetch(url, { credentials: "same-origin" }).then((r) => r.json());

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

  const newPatient = async (patient) => {
    setLoading(true);
    try {
      const response = await fetch("/api/patient", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patient),
      });
      const data = await response.json();
      setLoading(false);
      return { data };
    } catch (error) {
      // setLoading(false);
      console.log(error);
      return { error: error.message };
    }
  };

  const getUser = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/patient?id=${id}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setLoading(false);
      return { data: data.data.patients };
    } catch (error) {
      // setLoading(false);
      console.log(error);
      return { error: error.message };
    }
  };

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  const value = {
    user,
    userSWR,
    mutate,
    error,
    login,
    logout,
    loading,
    isValidating,
    errorSWR,
    newPatient,
    setUser,
    getUser,
    checkAuth,
    setLoading,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
