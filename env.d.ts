declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_KEY: string
      NEXT_PUBLIC_AUTH_API_KEY: string
    }
  }
}

export {}
