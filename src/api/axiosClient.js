import axios from "axios";

const baseUrl = "http://localhost:5268/api";

const axiosClient = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.response.use(
    (response) => {
        const contentType = response.headers["content-type"];
        if (contentType && contentType.includes("text/html")) {
            return Promise.reject({
                message: "La respuesta del servidor es HTML (¿backend caído?)",
                response,
            });
        }
        return response;
    },
    (error) => {
        if (error.message === "Network Error" || !error.response) {
            return Promise.reject({
                message: "No se pudo conectar al servidor",
                originalError: error,
            });
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
