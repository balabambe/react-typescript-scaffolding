import { IPostState, TypeActions } from './types';

const initialState: IPostState = {
  postItem: {
    id: 0,
    title: '',
    userId: 0,
    body: '',
  },
};

export default (state = initialState, action: TypeActions): IPostState => {
  switch (action.type) {
    case 'APP_POST_ITEM':
      return {
        ...state,
        postItem: action.payload,
      };
    default:
      return state;
  }
};
