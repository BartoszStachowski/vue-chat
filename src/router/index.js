import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ChatroomView from '@/views/ChatroomView.vue';
import { auth } from '@/firebase/config';

const requireAuth = (to, from, next) => {
	let user = auth.currentUser;
	if (!user) {
		next({ name: 'Home' });
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
		},
		{
			path: '/chatroom',
			name: 'Chatroom',
			component: ChatroomView,
			beforeEnter: requireAuth,
		},
	],
});

export default router;
