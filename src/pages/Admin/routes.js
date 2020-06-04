import {
	Groups,
	Collections,
	Products,
	Orders,
	Clientele,
	Manual,
} from './components'

export const routes = [
	{
		link: '/admin/',
		component: Manual,
		title: 'Инструкции',
		img: 'fas fa-book-reader',
	},
	{
		link: '/admin/groups',
		component: Groups,
		title: 'Каталог',
		img: 'fas fa-network-wired',
	},
	{
		link: '/admin/collections',
		component: Collections,
		title: 'Коллекции',
		img: 'fas fa-sitemap',
	},
	{
		link: '/admin/products',
		component: Products,
		title: 'Товары',
		img: 'fas fa-boxes',
	},
	{
		link: '/admin/orders',
		component: Orders,
		title: 'Заказы',
		img: 'fas fa-folder',
	},
	{
		link: '/admin/clientele',
		component: Clientele,
		title: 'Клиенты',
		img: 'fas fa-users',
	},
]
