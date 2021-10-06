import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteConfigComponentProps } from 'react-router-config';
import { useParams } from 'react-router-dom';

import { selectors as appSelectors } from '@store/app';
import { actions as postActions, selectors as postSelectors } from '@store/post';

import './Post.scoped.scss';

const { getLoadingStatus } = appSelectors;

const { fetchPostItem } = postActions;
const { getPostItem } = postSelectors;

const Books: React.FC<RouteConfigComponentProps> = () => {
  const {id} = useParams<{id: string}>();

  const loadingIndicator = useSelector(getLoadingStatus);
  const postItemSelector = useSelector(getPostItem);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostItem(id));
  }, [dispatch, id]);

  return(
    <>
      <span>{loadingIndicator && 'Fetching...'}</span>
      {!!postItemSelector.id &&
      <>
        <h3>{postItemSelector.title}</h3>
        <article>{postItemSelector.body}</article>
      </>
      }
    </>
  );
};

export default Books;
