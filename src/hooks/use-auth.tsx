// import { authService } from "@/lib/services/auth";
// import type { UserType } from "@/types/users";
// import { storageHelper } from "@/utils/storage";
// import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";

// interface AuthContextType {
//     user: UserType | null;
//     loadingProfile: boolean;
//     login: (email: string, password: string) => Promise<UserType | null>;
//     logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//     const [user, setUser] = useState<UserType | null>(null);
//     const [loadingProfile, setLoadingProfile] = useState(true);

//     const fetchProfile = useCallback(async () => {
//         try {
//             const profile = await authService.profile();
//             setUser(profile);
//             return profile;
//         } catch {
//             setUser(null);
//             return null;
//         } finally {
//             setLoadingProfile(false);
//         }
//     }, []);

//     useEffect(() => {
//         const token = storageHelper.getToken();
//         if (token) {
//             fetchProfile();
//         } else {
//             setLoadingProfile(false);
//         }
//     }, [fetchProfile]);

//     const login = useCallback(
//         async (email: string, password: string) => {
//             const data = await authService.login(email, password);
//             if (data?.accessToken) {
//                 return fetchProfile();
//             }
//             return null;
//         },
//         [fetchProfile]
//     );

//     const logout = useCallback(async () => {
//         await authService.logout();
//         storageHelper.removeToken();
//         setUser(null);
//         setLoadingProfile(false);
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user, loadingProfile, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) throw new Error("useAuth must be used within AuthProvider");
//     return context;
// };