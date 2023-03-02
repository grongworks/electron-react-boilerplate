export interface IElectronAPI {
  sayHiToServer: () => Promise<void>,
}

declare global {
  interface Window {
    electronApi: IElectronAPI
  }
}