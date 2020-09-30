import { Section, Group } from './pages'

export const routes = [
	{
		link: '/catalog/:section/:group',
		component: Group,
	},
	{
		link: '/catalog/:section',
		component: Section,
	},
]
