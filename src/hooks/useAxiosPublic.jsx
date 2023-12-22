import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://job-task1-server-delta.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
