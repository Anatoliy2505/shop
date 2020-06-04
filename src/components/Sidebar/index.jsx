import React from 'react'

import './Sidebar.scss'
import { Social } from '../Social'
import CatalogTree from './components/CatalogTree'

export const Sidebar = () => {
	return (
		<nav className={'sidebar'}>
			<h1 className={'hidden'}>Сайдбар</h1>
			<CatalogTree />
			<aside className="sidebar__social">
				<h3 className="sidebar__social-title">Следите за нами в соцсетях</h3>
				<Social />
			</aside>
		</nav>
	)
}
