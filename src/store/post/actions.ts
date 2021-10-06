import apiCaller, { Method } from '@utils/axios';
import { ThunkDispatch } from 'redux-thunk';

export const fetchPostsList = () =>
  (dispatch: ThunkDispatch<any, any, any>): Promise<void> => {
    const opts = {
      method: 'get' as Method,
      url: `${process.env.REACT_APP_API_URL}posts`,
    };

    return apiCaller({ opts, dispatch }).then((postLists) => {
      dispatch({ type: 'POST_LISTS', payload: { postLists } });
    });
  };

export const fetchPostItem = (id: string) =>
  (dispatch: ThunkDispatch<any, any, any>): Promise<void> => {
    const opts = {
      method: 'get' as Method,
      url: `${process.env.REACT_APP_API_URL}posts/${id}`,
    };
    return apiCaller({ opts, dispatch }).then((postItem) => {
      dispatch({ type: 'POST_ITEM', payload: { postItem } });
    });
  };
