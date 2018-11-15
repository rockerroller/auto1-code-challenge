import Main from 'scenes/Main';
import Detail from 'scenes/Detail';


const routes = [{
  path: '/',
  component: Main
}, {
  path: '/detail/:id',
  component: Detail
}];

export default routes;
