import Main from 'scenes/Main';
import Detail from 'scenes/Detail';
import NotFound from 'scenes/NotFound';

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
