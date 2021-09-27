import { IPostItem, IPostStore } from './types';

export const postLists = (state: IPostStore): IPostItem[] => state.post.postLists;
export const getPostItem = (state: IPostStore): IPostItem => state.post.postItem;
