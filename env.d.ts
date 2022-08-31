declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string
      NEXT_PUBLIC_AUTH_API_KEY: string
      IRON_SESSION_PASSWORD: string
      MONGODB_URI: string
      URL: string
      GET_API_KEY: string
    }
  }
}

export {}
