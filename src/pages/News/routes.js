import { NewsItem } from './components'
import { NewsList } from '../../components'

export const routes = [
	{
		link: '/news/:news',
		component: NewsItem,
	},
	{
		link: '/news',
		component: NewsList,
	},
]
