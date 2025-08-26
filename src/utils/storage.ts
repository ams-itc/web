const TOKEN_KEY = "accessToken";

export const storageHelper = {
    setToken: (token: string) => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem(TOKEN_KEY, token);
        }
    },

    getToken: (): string | null => {
        if (typeof window !== "undefined") {
            return window.localStorage.getItem(TOKEN_KEY);
        }
        return null;
    },

    removeToken: () => {
        if (typeof window !== "undefined") {
            window.localStorage.removeItem(TOKEN_KEY);
        }
    },

    clearAll: () => {
        if (typeof window !== "undefined") {
            window.localStorage.clear();
        }
    }
};