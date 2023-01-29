import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "" : "http://localhost:3000/api",
});

export default axiosInstance;
