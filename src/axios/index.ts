import axios, {AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGIzZTY2ZTkxOTJlZWFhMTJlN2U5MGRkODdkN2RkMiIsIm5iZiI6MTcxOTk2MDU3NS41NTk3OTcsInN1YiI6IjYyNzNjNTc2NTgwMGM0MDA5Y2RlZDZmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em4bSo07qoTlFsbv0YPINM0biyZGYt8lkmwLxgLLXnk'
    },
});

export default axiosInstance;
