import { OrderDetail } from './pages'
import { OrdersList } from './pages'

export const routes = [
	{
		link: '/orders/:orderId',
		component: OrderDetail,
	},
	{
		link: '/orders',
		component: OrdersList,
	},
]
