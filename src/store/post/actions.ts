import { actions as appActions } from '@store/app';
import apiRequest from '@utils/axios';
import { ThunkDispatch } from 'redux-thunk';

export function fetchPostItem() {
  return (dispatch: ThunkDispatch<unknown, unknown, any>): unknown => {
    const opts = {
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}posts/1`,
    };
    dispatch(appActions.actionAppLoadingStart());
    return apiRequest(opts).then((res) => {
      const dispatchData = {
        type: 'APP_POST_ITEM',
        payload: res,
      };
      dispatch(dispatchData);
    }).finally(() => {
      dispatch(appActions.actionAppLoadingEnd());
    });
  };
}

export default {};
