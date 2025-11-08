// import { storageHelper } from "@/utils/storage";
// import client from "../api";

// export class AuthService {
//   async login(login: string, password: string) {
//     const { data } = await client.post('/auth/login', { login, password });
//     storageHelper.setToken(data.accessToken); // store access token
//     return data;
//   }

//   async logout() {
//     const { data } = await client.post('/auth/logout');
//     storageHelper.removeToken();
//     return data;
//   }

//   async profile() {
//     const { data } = await client.get('/auth/profile');
//     return data;
//   }
// }

// export const authService = new AuthService();