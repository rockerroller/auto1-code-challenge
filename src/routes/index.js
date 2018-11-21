import { lazy } from 'react';
const Main = lazy(() => import('scenes/Main'));
const Detail = lazy(() => import('scenes/Detail'));
const NotFound = lazy(() => import('scenes/NotFound'));

const routes = [{
  exact: true,
  path: '/',
  component: Main
}, {
  path: '/detail/:id',
  component: Detail
}, {
  component: NotFound
}];

export default routes;
