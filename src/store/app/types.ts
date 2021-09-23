export interface IAppStore {
  app: IAppState
}

export interface IAppDefaultPageSize {
  defaultPageSize: number
  defaultPageSizes: Array<number>
}

export interface IAppState extends IAppDefaultPageSize {
  isLoading: boolean
}

export type TypeActions = {
  type: string,
  isLoading: boolean,
}
