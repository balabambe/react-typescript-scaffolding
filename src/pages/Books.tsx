import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteConfigComponentProps } from 'react-router-config';

import RouterOutlet from '@components/RouterOutlet';
import { selectors as appSelectors } from '@store/app';
import { actions as postActions, selectors as postSelectors } from '@store/post';

const { getLoadingStatus } = appSelectors;

const { fetchPostItem } = postActions;
const { getPostItem } = postSelectors;

const Books: React.FC<RouteConfigComponentProps> = ({route}) => {
  const loadingIndicator = useSelector(getLoadingStatus);
  const postItemSelector = useSelector(getPostItem);
  const dispatch = useDispatch();
  const clickme = () => {
    dispatch(fetchPostItem());
  };
  return(
    <>
      <h1>Books</h1>
      <br />
      <button onClick={() => clickme()} type="button">Click me!</button>
      <span>{loadingIndicator && 'Fetching...'}</span>
      <br />
      {!!postItemSelector.id &&
      <ul>
        <li>id: {postItemSelector.id}</li>
        <li>title: {postItemSelector.title}</li>
        <li>userId: {postItemSelector.userId}</li>
        <li>completed: {postItemSelector.body}</li>
      </ul>
      }
      <RouterOutlet route={route} />
    </>
  );
};

export default Books;
