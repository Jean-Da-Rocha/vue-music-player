import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/playlist',
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: () => import('../views/Playlist.vue'),
  },
  {
    path: '/track',
    name: 'player',
    component: () => import('../views/Player.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
