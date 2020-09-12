import { Section, Group } from './pages'

export const routes = [
	{
		link: '/catalog/:section/:group',
		component: Group,
		title: 'Инструкции',
	},
	{
		link: '/catalog/:section',
		component: Section,
		title: 'Инструкции',
	},
]
