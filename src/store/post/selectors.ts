import { IPostItem, IPostStore } from './types';

export const getPostItem = (state: IPostStore): IPostItem => state.post.postItem;

export default {};
