import HomePage from '../pages/home';

// Route tanımlamaları
const routes = [
	{
		name: 'home',
		path: '/',
		element: <HomePage />,
		permissions: ['public'],
		translations: () => Promise.resolve({})
	},
];

export default routes;