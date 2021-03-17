import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/overview',
    component: Home,
    children: [{
        path: '/overview',
        name: 'Overview',
        redirect: '/overview/project',
        component: () => import(/* webpackChunkName: "about" */ '../views/Overview/index.vue'),
        children: [{
          path: 'project',
          name: 'Project',
          component: () => import(/* webpackChunkName: "about" */ '../views/Overview/Project/index.vue'),
        }],
      }, {
        path: '/user',
        name: 'User',
        redirect: '/user/external',
        component: () => import(/* webpackChunkName: "about" */ '../views/User/index.vue'),
        children: [{
          path: 'external',
          name: 'External',
          component: () => import(/* webpackChunkName: "about" */ '../views/User/External/index.vue'),
        }, {
          path: 'internal',
          name: 'Internal',
          component: () => import(/* webpackChunkName: "about" */ '../views/User/Internal/index.vue'),
        }]
      }]
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
