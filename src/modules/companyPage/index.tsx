import React from 'react';

export const companyPageConfig = [
  {
    routes: [
      {
        path: '/company/signup',
        component: React.lazy(() => import('./CompanyPage')),
      },
    ],
  },
];
