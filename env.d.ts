declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      IRON_SESSION_PASSWORD: string;
      NODE_ENV: string;
    }
  }
}

export {}
