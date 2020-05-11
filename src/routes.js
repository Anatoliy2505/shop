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
			'/sale/:products',
			'/hits/:products',
			'/search/:products',
			'/recommendation/:products',
			'/catalog/:mainCategory/:parentCategory/:products',
		],
		component: ProductsDetail,
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
		path: ['/catalog/:mainCategory/:parentCategory', '/catalog/:mainCategory'],
		component: Catalog,
	},
	{
		key: 9,
		path: ['/login', '/registration'],
		component: Auth,
	},
]
