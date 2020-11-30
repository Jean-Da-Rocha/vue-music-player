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
    path: '/song/:id',
    name: 'player',
    component: () => import('../views/Player.vue'),
  },
  {
    path: '/artist/:id',
    name: 'artist',
    component: () => import('../views/Artist.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
