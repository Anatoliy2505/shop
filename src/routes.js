import {
	Home,
	News,
	Catalog,
	ProductsDetail,
	Hits,
	Sale,
	Search,
	Auth,
	Admin,
	User,
	Cart,
	Orders,
	VideosPage,
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
		isExact: true,
	},
	{
		key: 12,
		path: '/cart',
		component: Cart,
		isExact: true,
	},
	{
		key: 3,
		path: '/hits',
		component: Hits,
		isExact: true,
	},
	{
		key: 4,
		path: '/sale',
		component: Sale,
		isExact: true,
	},
	{
		key: 5,
		path: '/search',
		component: Search,
		isExact: true,
	},
	{
		key: 7,
		path: ['/news/:news', '/news'],
		component: News,
		isExact: true,
	},
	{
		key: 8,
		path: ['/catalog/:section/:group', '/catalog/:section'],
		component: Catalog,
		isExact: true,
	},
	{
		key: 9,
		path: ['/login', '/registration'],
		component: Auth,
		isExact: true,
	},
	{
		key: 10,
		path: '/admin',
		component: Admin,
		isPrivate: true,
		owner: 'admin',
	},
	{
		key: 6,
		path: '/orders',
		component: Orders,
		owner: 'user',
		isPrivate: true,
	},
	{
		key: 11,
		path: '/user',
		component: User,
		owner: 'user',
		isExact: true,
		isPrivate: true,
	},
	{
		key: 12,
		path: '/video',
		component: VideosPage,
		isExact: true,
	},
]
