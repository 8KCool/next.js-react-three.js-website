declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string
    }
  }
}

export {}
