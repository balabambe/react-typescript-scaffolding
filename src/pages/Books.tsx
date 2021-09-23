import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteConfigComponentProps } from 'react-router-config';

import RouterOutlet from '@components/RouterOutlet';
import { actions as appActions, selectors as appSelectors } from '@store/app';

const { getLoadingStatus } = appSelectors;
const { actionAppLoadingEnd, actionAppLoadingStart } = appActions;

const Books: React.FC<RouteConfigComponentProps> = ({route}) => {
  const selector = useSelector(getLoadingStatus);
  const dispatch = useDispatch();
  const clickme = () => {
    if (selector) {
      dispatch(actionAppLoadingEnd());
    } else {
      dispatch(actionAppLoadingStart());
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
  );
};

export default Books;
