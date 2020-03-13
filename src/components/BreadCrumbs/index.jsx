import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Breadcrumbs = ({ routes }) => {
	const { pathname } = useLocation()
	const pathnameArray = pathname.split('/').slice(1)
	console.log(pathname, routes, pathnameArray)

	const currentRouter = routes.filter(({ path, containParametrs }) => {
		if (pathnameArray[0]) {
			if (pathnameArray.length === 1) {
				if (containParametrs) {
					return false
				} else if (typeof path === 'string') {
					if (pathnameArray[0] === path) {
						return true
					} else {
						return false
					}
				}
			}
		} else {
			return false
		}
	})
	console.log(currentRouter())

	return <div>Breadcrumbs</div>
}

export default connect(null, {})(Breadcrumbs)

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
