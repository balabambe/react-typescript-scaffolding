export interface IPostStore {
  post: IPostState;
}

export interface IPostItem {
  id: number;
  title: string;
  userId: number;
  body: string;
  [key: string]: unknown;
}

export interface IPostState {
  postItem: IPostItem;
  postLists: IPostItem[];
}

export interface IPostActions<T> {
  type: string;
  payload: T;
}
