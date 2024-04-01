
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
 

const useAllData = () => {
  const {user} = useAuth()
  const axiosPublic =  useAxios();
  const {
    data: task = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/task?email=${user?.email}`);

      return res.data;
    },
  });

  return [task, refetch, loading];
};
export default useAllData;
