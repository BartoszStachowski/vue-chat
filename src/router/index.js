import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '@/firebase/config';

//views
import HomeView from '@/views/HomeView.vue';
import ChatroomView from '@/views/ChatroomView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const requireAuth = (to, from, next) => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    next({ name: 'Home' });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    next({ name: 'Chatroom' });
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      beforeEnter: requireNoAuth,
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: ChatroomView,
      beforeEnter: requireAuth,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
});

export default router;
