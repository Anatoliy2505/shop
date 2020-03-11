// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { withBreadcrumbs } from 'withBreadcrumbs'

// const UserBreadcrumb = ({ match }) => <span>{match.params.userId}</span> // use match param userId to fetch/display user name
// const ProductBreadcrumb = ({ match }) => <span>{match.params.userId}</span> // use match param userId to fetch/display user name

// const routes = [
// 	{ path: '/news', breadcrumb: 'Новости' },
// 	{
// 		path: ':mainCategory/:parentCategory/:products',
// 		breadcrumb: ProductBreadcrumb,
// 	},
// 	{ path: 'something-else', breadcrumb: ':)' },
// ]

// const Breadcrumbs = ({ breadcrumbs }) => (
// 	<div>
// 		{breadcrumbs.map(({ breadcrumb, path, match }) => (
// 			<span key={path}>
// 				<NavLink to={match.url}>{breadcrumb}</NavLink>
// 				<span>/</span>
// 			</span>
// 		))}
// 	</div>
// )

// export default withBreadcrumbs(routes)(Breadcrumbs)
