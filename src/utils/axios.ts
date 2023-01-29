// Axios
import axios from "axios";
// Config
import { server } from "../config";

const axiosInstance = axios.create({
  baseURL: `${server}/api`,
});

export default axiosInstance;
