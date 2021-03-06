import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './BreadCrumbs.scss'

export const BreadCrumbsItem = ({ path = '', children }) => {
	if (path === '') {
		return <span className={'bread-crumbs__item'}>{children}</span>
	}
	return (
		<NavLink className={'bread-crumbs__item'} to={path}>
			{children}
		</NavLink>
	)
}

BreadCrumbsItem.propTypes = {
	path: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
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
			<BreadCrumbsItem path="">{lastElementName}</BreadCrumbsItem>
		</nav>
	)
}

BreadCrumbs.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object),
	lastElementName: PropTypes.string.isRequired,
}
