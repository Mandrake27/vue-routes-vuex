// Default
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// Pages
import Home from '@/pages/Home';
import NotFound from '@/pages/404';
import Example from '@/pages/Example';

// Routing
export default new Router({
	mode: 'history', // adds hash sign to keep the whole route address
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/example',
			name: 'example',
			component: Example
		},
		{
			path: '*',
			name: 'notFound',
			component: NotFound
		}
	]
});