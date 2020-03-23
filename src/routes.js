import {
	Home,
	News,
	Catalog,
	ProductsDetail,
	Hits,
	Sale,
	Search,
} from './pages'

export const routes = [
	{
		key: 1,
		path: ['/', '/home'],
		component: Home,
		isExact: true,
	},
	{
		key: 5,
		path: [
			'/sale/:products',
			'/hits/:products',
			'/search/:products',
			'/catalog/:mainCategory/:parentCategory/:products',
		],
		component: ProductsDetail,
	},
	{
		key: 2,
		path: '/hits',
		component: Hits,
	},
	{
		key: 3,
		path: '/sale',
		component: Sale,
	},
	{
		key: 3,
		path: '/search',
		component: Search,
	},
	{
		key: 4,
		path: ['/news/:news', '/news'],
		component: News,
	},
	{
		key: 6,
		path: ['/catalog/:mainCategory/:parentCategory', '/catalog/:mainCategory'],
		component: Catalog,
	},
]
