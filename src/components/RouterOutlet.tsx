import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

const RouterOutlet: React.FC<RouteConfig> = ({ route }) => <>{renderRoutes(route?.routes)}</>;
export default RouterOutlet;
