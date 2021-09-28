
import { actions as appActions } from '@store/app';
import apiRequest from '@utils/axios';
import { ThunkDispatch } from 'redux-thunk';

export const fetchPostsList = () => ((dispatch: ThunkDispatch<any, any, any>): Promise<void> => {
  const opts = {
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}posts`,
  };
  dispatch(appActions.actionAppLoadingStart());
  return apiRequest(opts).then((postLists) => {
    const dispatchConst = {
      type: 'POST_LISTS',
      payload: { postLists },
    };
    dispatch(dispatchConst);
  }).finally(() => {
    dispatch(appActions.actionAppLoadingEnd());
  });
});

export function fetchPostItem(id: string) {
  return (dispatch: ThunkDispatch<any, any, any>): Promise<void> => {
    const opts = {
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}posts/${id}`,
    };
    dispatch(appActions.actionAppLoadingStart());
    return apiRequest(opts).then((postItem) => {
      const dispatchData = {
        type: 'POST_ITEM',
        payload: { postItem },
      };
      dispatch(dispatchData);
    }).finally(() => {
      dispatch(appActions.actionAppLoadingEnd());
    });
  };
}
