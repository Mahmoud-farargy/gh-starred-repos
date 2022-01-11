import axios from "axios";

export const API = () => {
    const axiosInstance = axios.create({
        baseURL: "https://api.github.com/",
        headers: {
            Accept: "application/json",
            "Content-Type": "application.json"
        }
    })
    axios.defaults.timeout = 10000;
    axiosInstance.interceptors.request.use(request => {
        return request;
    }, err => {
        return Promise.reject(err);
    })
    return axiosInstance;
}