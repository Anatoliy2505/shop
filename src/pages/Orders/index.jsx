import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'

export const Orders = () => {
	const routesSwitch = () => (
		<Switch>
			{routes &&
				routes.length > 0 &&
				routes.map(({ link, component, ...props }) => {
					return (
						<Route key={link} path={link} component={component} {...props} />
					)
				})}
		</Switch>
	)
	return <section className="order-page">{routesSwitch()}</section>
}
