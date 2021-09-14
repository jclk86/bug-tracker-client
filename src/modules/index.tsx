import React from 'react';
import {Redirect} from 'react-router-dom';

import {createRoutes} from '../@crema/utility/Utils';
import {dashBoardConfigs} from './dashboard';
import {errorPagesConfigs} from './errorPages';
import {authRouteConfig} from './auth';
import {ecommerceConfig} from './ecommerce';
import {initialUrl} from '../shared/constants/AppConst';
import {appsConfig} from './apps';
import {extraPagesConfigs} from './extraPages';
import {userListConfig} from './userList';
import {menuLevelConfig} from './menu';
import {thirdPartyConfigs} from './thirdParty';
import {userPagesConfig} from './userPages';
import {companyPageConfig} from './companyPage';

const routeConfigs = [
  ...authRouteConfig,
  ...dashBoardConfigs,
  ...ecommerceConfig,
  ...extraPagesConfigs,
  ...userListConfig,
  ...menuLevelConfig,
  ...appsConfig,
  ...thirdPartyConfigs,
  ...userPagesConfig,
  ...companyPageConfig,
  ...errorPagesConfigs,
];

const routes = [
  ...createRoutes(routeConfigs),
  {
    path: '/',
    exact: true,
    component: () => <Redirect to={initialUrl} />,
  },
  {
    component: () => <Redirect to='/error-pages/error-404' />,
  },
];

export default routes;
