import { IPostActions, IPostState } from './types';

const initialState: IPostState = {
  postLists: [],
  postItem: {
    id: 0,
    title: '',
    userId: 0,
    body: '',
  },
};

export default (state = initialState, action: IPostActions<IPostState>): IPostState => {
  switch (action.type) {
    case 'POST_LISTS':
      return {
        ...state,
        postLists: action.payload.postLists,
      };
    case 'CLEAR_POST_LISTS':
      return {
        ...state,
        postLists: [],
      };
    case 'POST_ITEM':
      return {
        ...state,
        postItem: action.payload.postItem,
      };
    case 'CLEAR_POST_ITEM':
      return {
        ...state,
        postItem: initialState.postItem,
      };
    default:
      return state;
  }
};
