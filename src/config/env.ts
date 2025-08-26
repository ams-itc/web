interface EnvConfig {
    apiUrl: string;
    imageUrl: string;
    otherKey?: string;
}

export const getEnvs = (): EnvConfig => {
    const env = (window as any)._env_ ? (window as any)._env_ : import.meta.env;

    if (process.env.NODE_ENV !== 'production') {
        return {
            apiUrl: env.VITE_API_URL,
            imageUrl: env.VITE_IMAGE_URL,
            otherKey: env.VITE_OTHER_KEY
        }
    }
    return {
        apiUrl: env.API_URL,
        imageUrl: env.IMAGE_URL,
        otherKey: env.OTHER_KEY
    }
};
