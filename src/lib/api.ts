import axios from "axios";
import { getEnvs } from "@/config/env";
// import { storageHelper } from "@/utils/storage";

const { apiUrl } = getEnvs();

// Axios instance
const client = axios.create({
    baseURL: apiUrl,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});


export default client;

// // Request interceptor: attach access token
// client.interceptors.request.use(
//     (config) => {
//         const token = storageHelper.getToken();
//         if (token && config.headers) {
//             config.headers["Authorization"] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// // Response interceptor: handle 401 refresh and global errors
// let isRefreshing = false;
// let failedQueue: { resolve: (token: string) => void; reject: (err: any) => void }[] = [];

// const processQueue = (error: any, token: string | null = null) => {
//     failedQueue.forEach((prom) => {
//         if (error) prom.reject(error);
//         else prom.resolve(token!);
//     });
//     failedQueue = [];
// };

// client.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;

//         // Handle 401: refresh token logic
//         if (error.response?.status === 401 && !originalRequest._retry) {
//             if (isRefreshing) {
//                 return new Promise<string>((resolve, reject) => {
//                     failedQueue.push({ resolve, reject });
//                 })
//                     .then((token) => {
//                         originalRequest.headers["Authorization"] = `Bearer ${token}`;
//                         return client(originalRequest);
//                     })
//                     .catch((err) => Promise.reject(err));
//             }

//             originalRequest._retry = true;
//             isRefreshing = true;

//             try {
//                 const { data } = await axios.post(
//                     `${getEnvs().apiUrl}/auth/refresh`,
//                     {},
//                     { withCredentials: true }
//                 );

//                 storageHelper.setToken(data.accessToken);
//                 processQueue(null, data.accessToken);

//                 originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
//                 return client(originalRequest);
//             } catch (err) {
//                 processQueue(err, null);
//                 return Promise.reject(err);
//             } finally {
//                 isRefreshing = false;
//             }
//         }

//         // Global error handling: show toast
//         if (error.response?.data?.message) {
//             console.error(error.response.data.message);
//         } else if (error.message) {
//             console.error(error.message);
//         } else {
//             console.error("An unexpected error occurred");
//         }
//         console.log("[GLOBAL ERORR]: ", error)
//         return Promise.reject(error);
//     }
// );

// export default client;