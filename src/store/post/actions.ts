import apiRequest, { Method } from '@utils/axios';
import { ThunkDispatch } from 'redux-thunk';

export const fetchPostsList = () =>
  (dispatch: ThunkDispatch<any, any, any>): Promise<void> => {
    const opts = {
      method: 'get' as Method,
      url: `${process.env.REACT_APP_API_URL}posts`,
    };

    return apiRequest({ opts, dispatch }).then((postLists) => {
      const dispatchConst = {
        type: 'POST_LISTS',
        payload: { postLists },
      };
      dispatch(dispatchConst);
    });
  };

export const fetchPostItem = (id: string) =>
  (dispatch: ThunkDispatch<any, any, any>): Promise<void> => {
    const opts = {
      method: 'get' as Method,
      url: `${process.env.REACT_APP_API_URL}posts/${id}`,
    };
    return apiRequest({ opts, dispatch }).then((postItem) => {
      const dispatchData = {
        type: 'POST_ITEM',
        payload: { postItem },
      };
      dispatch(dispatchData);
    });
  };
