interface Window {
  ethereum: any
  web3: any
}

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number
    }
  }
}

export {}
