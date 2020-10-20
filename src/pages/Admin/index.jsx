import React from 'react'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { routes } from './routes'
import './Admin.scss'

const Admin = () => {
	const adminNavigation = (
		<nav className="admin-page__nav">
			{routes.length &&
				routes.map(route => (
					<NavLink
						key={route.title}
						to={route.link}
						className={'admin-page__nav-link'}
						exact
					>
						<i className={`${route.img} admin-page__nav-img`} />
						{route.title}
					</NavLink>
				))}
		</nav>
	)

	const routesSwitch = () =>
		routes.length &&
		routes.map(route => (
			<Route
				key={route.link}
				path={route.link}
				component={route.component}
				exact
			/>
		))

	return (
		<section className={'admin-page'}>
			{adminNavigation}
			{routesSwitch()}
		</section>
	)
}

export default Admin
