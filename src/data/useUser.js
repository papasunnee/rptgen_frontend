import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";

export default function useUser() {
  const { data, mutate, error } = useSWR("api_user", fetcher);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
