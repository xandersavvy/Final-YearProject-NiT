declare global {
    namespace NodeJS {
      interface ProcessEnv {
        BACKEND_URL: string;
        BACKEND_PORT: string;
      }
    }
  }