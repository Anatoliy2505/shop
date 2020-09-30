import React, { useEffect } from 'react'
import { routes } from './routes'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { Preloader, Error, Empty } from '../../components'

import { newsAllSelector } from './redux/selectors'
import { getNews } from './redux/actions'

const News = ({ news: { data, isLoading, errorMsg }, getNews }) => {
	useEffect(() => {
		if (!data) {
			getNews()
		}
	}, [data, getNews])

	const routesSwitch = () => (
		<Switch>
			{routes.length &&
				routes.map(route => {
					const Component = route.component
					return (
						<Route
							key={route.link}
							path={route.link}
							render={props => <Component data={data} {...props} />}
							exact
						/>
					)
				})}
		</Switch>
	)

	return (
		<section className={'news-page'}>
			{isLoading ? (
				<Preloader title={'Загрузка новостей...'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : data && data.length > 0 ? (
				routesSwitch()
			) : (
				<Empty title={'Новостей пока нет'} />
			)}
		</section>
	)
}

export default connect(
	state => ({
		news: newsAllSelector(state),
	}),
	{ getNews }
)(News)
