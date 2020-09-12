import {
	Home,
	News,
	Catalog,
	ProductsDetail,
	Hits,
	Sale,
	Search,
	Recommendation,
	Auth,
	Admin,
	User,
	Cart,
} from './pages'

export const routes = [
	{
		key: 1,
		path: ['/', '/home'],
		component: Home,
		isExact: true,
	},
	{
		key: 2,
		path: [
			'/sale/:collectionName',
			'/hits/:collectionName',
			'/search/:collectionName',
			'/recommendation/:collectionName',
			'/product/:section/:group/:collectionName',
			'/product/:section/:collectionName',
		],
		component: ProductsDetail,
	},
	{
		key: 12,
		path: '/cart',
		component: Cart,
	},
	{
		key: 3,
		path: '/hits',
		component: Hits,
	},
	{
		key: 4,
		path: '/sale',
		component: Sale,
	},
	{
		key: 5,
		path: '/search',
		component: Search,
	},
	{
		key: 6,
		path: '/recommendation',
		component: Recommendation,
	},
	{
		key: 7,
		path: ['/news/:news', '/news'],
		component: News,
	},
	{
		key: 8,
		path: ['/catalog/:section/:group', '/catalog/:section'],
		component: Catalog,
	},
	{
		key: 9,
		path: ['/login', '/registration'],
		component: Auth,
	},
	{
		key: 10,
		path: '/admin',
		component: Admin,
		isPrivate: true,
		owner: 'admin',
	},
	{
		key: 11,
		path: '/user',
		component: User,
		owner: 'user',
		isPrivate: true,
	},
]
