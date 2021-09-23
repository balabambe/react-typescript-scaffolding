import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteConfigComponentProps } from 'react-router-config';

import RouterOutlet from '@components/RouterOutlet';
import { actions as appActions, selectors as appSelectors } from '@store/app';

const Books: React.FC<RouteConfigComponentProps> = ({route}) =>  {
  const selector = useSelector(appSelectors.getLoadingStatus);
  const dispatch = useDispatch();
  const clickme = () => {
    if (selector) {
      dispatch(appActions.actionAppLoadingEnd());
    } else {
      dispatch(appActions.actionAppLoadingStart());
    }
  };
  return(
    <>
      <h1>Books</h1>
      {selector && 'isLoading'}
      {!selector && 'isNotLoading'}
      <br />
      <button onClick={() => clickme()} type="button">Click me!</button>
      <RouterOutlet route={route} />
    </>
  );};
export default Books;
