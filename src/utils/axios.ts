// Axios
import axios from "axios";
// Config
import { server } from "../config";

const axiosInstance = axios.create({
  baseURL: `https://trees-analysis-nextjs-chartjs-ca.netlify.app/api`,
});

export default axiosInstance;
