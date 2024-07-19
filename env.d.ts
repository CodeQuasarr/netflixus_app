/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VUE_APP_API_KEY: string;
    readonly VUE_APP_BASE_URL: string;
    // Ajoutez d'autres variables d'environnement ici si nécessaire
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
