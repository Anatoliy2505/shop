import React from 'react'
import { NavLink } from 'react-router-dom'

import './BreadCrumbs.scss'

export const BreadCrumbsItem = ({ path, children }) => {
	return (
		<NavLink className={'bread-crumbs__item'} to={path}>
			{children}
		</NavLink>
	)
}

export const BreadCrumbs = ({ routes, lastElementName }) => {
	const breadCrumbsList = routes => {
		return routes.map(({ path, title }) => {
			return (
				<BreadCrumbsItem key={path} path={path}>
					{title}
				</BreadCrumbsItem>
			)
		})
	}

	return (
		<nav className={'bread-crumbs'}>
			<h1 className={'hidden'}>Навигационная цепочка</h1>
			<BreadCrumbsItem path={'/'}>Главная</BreadCrumbsItem>
			{routes ? breadCrumbsList(routes) : null}
			<BreadCrumbsItem path={{}}>{lastElementName}</BreadCrumbsItem>
		</nav>
	)
}
