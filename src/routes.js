import { Home, News, Catalog, ProductsDetail, Hits, Sale } from './pages'

export const routes = [
	{
		key: 1,
		path: ['/', '/home'],
		name: 'Главная',
		component: Home,
		isExact: true,
	},
	{
		key: 5,
		path: [
			'/sale/:products',
			'/hits/:products',
			'/:mainCategory/:parentCategory/:products',
		],
		name: 'Обзор продукта',
		component: ProductsDetail,
		isBreadCrumbs: true,
		containParametrs: true,
	},
	{
		key: 2,
		path: '/hits',
		name: 'Хиты продаж',
		component: Hits,
		isBreadCrumbs: true,
	},
	{
		key: 3,
		path: '/sale',
		name: 'Товары с клёвыми скидками',
		component: Sale,
		isBreadCrumbs: true,
	},
	{
		key: 4,
		path: ['/news/:news', '/news'],
		name: 'Наши новости',
		component: News,
		isBreadCrumbs: true,
		containParametrs: true,
	},
	{
		key: 6,
		path: ['/:mainCategory/:parentCategory', '/:mainCategory'],
		name: 'Каталог',
		component: Catalog,
		isBreadCrumbs: true,
		containParametrs: true,
	},
]
