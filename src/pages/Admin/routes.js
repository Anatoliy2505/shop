import {
	Groups,
	Collections,
	Products,
	Orders,
	Clientele,
	Manual,
	Slider,
	News,
} from './pages'

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
	{
		link: '/admin/slider',
		component: Slider,
		title: 'Слайдер',
		img: 'far fa-images',
	},
	{
		link: '/admin/news',
		component: News,
		title: 'Новости',
		img: 'far fa-newspaper',
	},
]
