import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';

import RouterOutlet from '@components/RouterOutlet';

const Posts: React.FC<RouteConfigComponentProps> = ({route}) => <RouterOutlet route={route} />;

export default Posts;
