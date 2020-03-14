import React from 'react'
import { Link } from 'react-router-dom'

import './BreadCrumbs.scss'

export const BreadCrumbsItem = ({ path, children }) => {
	return (
		<Link className={'bread-crumbs__item'} to={path}>
			{children}
		</Link>
	)
}

export const BreadCrumbs = ({ routes, lastElementName }) => {
	const breadCrumbsList = routes => {
		return routes.map(({ path, title }, index) => {
			return (
				<BreadCrumbsItem key={path} path={path}>
					{title}
				</BreadCrumbsItem>
			)
		})
	}

	return (
		<div className={'bread-crumbs'}>
			<BreadCrumbsItem path={'/'}>Главная</BreadCrumbsItem>
			{routes ? breadCrumbsList(routes) : null}
			<BreadCrumbsItem path={{}}>{lastElementName}</BreadCrumbsItem>
		</div>
	)
}
