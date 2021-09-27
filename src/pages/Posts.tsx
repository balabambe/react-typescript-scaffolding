import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteConfigComponentProps } from 'react-router-config';

import RouterOutlet from '@components/RouterOutlet';
import { selectors as appSelectors } from '@store/app';
import { actions as postActions, selectors as postSelectors } from '@store/post';

const { getLoadingStatus } = appSelectors;

const { fetchPostsList } = postActions;
const { postLists } = postSelectors;

const Posts: React.FC<RouteConfigComponentProps> = ({route}) => {
  const loadingIndicator = useSelector(getLoadingStatus);
  const postListSelector = useSelector(postLists);
  const dispatch = useDispatch();
  const clickme = () => {
    dispatch(fetchPostsList());
  };
  return(
    <>
      <h1>Posts</h1>
      <br />
      <button onClick={() => clickme()} type="button">Fetch Posts</button>
      <span>{loadingIndicator && 'Fetching...'}</span>
      <br />
      {!!postListSelector.length &&
      <ol>
        {postListSelector.map((post) =>
        <li key={post.id}>
          <ul>
            {Object.keys(post).map((item) =>
            <li key={item}>
              {item}: {post[item]}
            </li>)}
          </ul>
        </li>
        )}
      </ol>
      }
      <RouterOutlet route={route} />
    </>
  );
};

export default Posts;
