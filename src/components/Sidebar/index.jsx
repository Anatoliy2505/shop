import React from 'react'

import './Sidebar.scss'
import { Social } from '../Social'
import CatalogTree from './components/CatalogTree'

const Sidebar = () => {
	return (
		<aside className={'sidebar'}>
			<CatalogTree />
			<div className="sidebar__social">
				<h3 className="sidebar__social-title">Следите за нами в соцсетях</h3>
				<Social />
			</div>
		</aside>
	)
}

export { Sidebar }
