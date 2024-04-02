import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://task-management-job-server.vercel.app",
});
const useAxios = () => {
  return axiosPublic;
};
export default useAxios;
