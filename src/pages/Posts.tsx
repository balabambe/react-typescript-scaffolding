import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteConfigComponentProps } from 'react-router-config';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    dispatch(fetchPostsList());
  }, [dispatch]);
  return(
    <>
      <h1>Posts</h1>
      <button onClick={() => clickme()} type="button">Fetch Posts</button>
      <br />
      <br />
      <span>{loadingIndicator && 'Fetching...'}</span>
      <br />
      {!!postListSelector.length &&
      <ol>
        {postListSelector.map((post) =>
        <li key={post.id}>
          <Link to={`${route?.path}/${post.id}`}>{post.title}</Link>
        </li>
        )}
      </ol>
      }
      <RouterOutlet route={route} />
    </>
  );
};

export default Posts;
