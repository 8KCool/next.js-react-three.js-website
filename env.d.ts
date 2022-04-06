declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string
      NEXT_PUBLIC_AUTH_API_KEY: string
    }
  }
}

export {}
