export interface IPostStore {
  post: IPostState
}

export interface IPostItem {
  id: number
  title: string
  userId: number
  body: string
}

export interface IPostState {
  postItem: IPostItem
}

export type TypeActions = {
  type: string,
  payload: IPostItem,
}
