import useSWR from "swr";

function useUser(id) {
  const { user } = useContext(AuthContext);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(user ? `/api/user/${id}` : null, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
