import { lazy } from 'react';

const SellerReportRoutes = [
  {
    path: 'seller/report',
    component: lazy(() => import('views/report')),
  },
  {
    path: 'report/overview',
    component: lazy(() => import('views/report-overview')),
  },
  {
    path: 'report/products',
    component: lazy(() => import('views/report-products')),
  },
  {
    path: 'report/revenue',
    component: lazy(() => import('views/report-revenue')),
  },
  {
    path: 'seller/report/orders',
    component: lazy(() => import('views/seller-views/report-orders')),
  },
  {
    path: 'report/variation',
    component: lazy(() => import('views/report-variation')),
  },
  {
    path: 'report/categories',
    component: lazy(() => import('views/report-categories')),
  },
  {
    path: 'report/stock',
    component: lazy(() => import('views/report-stock')),
  },
  {
    path: 'report/extras',
    component: lazy(() => import('views/report-extras')),
  },
];

export default SellerReportRoutes;
