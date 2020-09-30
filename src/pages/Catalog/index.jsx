import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { catalogSelector } from './redux/selectors'
import { BreadCrumbs, Preloader, Empty, Error } from '../../components'
import { routes } from './routes'
import { useEffect } from 'react'

const Catalog = ({
	catalog: { data, isLoading, errorMsg, viewElements = 5 },
}) => {
	const [title, setTitle] = useState('Поиск...')
	const [breacCrumbsRoutes, setRoutes] = useState(null)

	useEffect(() => {
		if (!isLoading && !data) {
			setTitle('Нет данных')
		}
		if (errorMsg) {
			setTitle(errorMsg)
		}
	}, [errorMsg, data, isLoading])

	const routesSwitch = () => (
		<Switch>
			{routes.length &&
				routes.map(route => {
					const Component = route.component
					return (
						<Route
							key={route.link}
							path={route.link}
							render={props => (
								<Component
									data={data}
									viewElements={viewElements}
									{...props}
									setTitle={setTitle}
									setRoutes={setRoutes}
									title={title}
								/>
							)}
							exact
						/>
					)
				})}
		</Switch>
	)

	return (
		<section className={'catalog-page'}>
			<h1 className={'hidden'}>Страница каталога товаров</h1>
			<BreadCrumbs routes={breacCrumbsRoutes} lastElementName={title} />
			{isLoading ? (
				<Preloader title={'Загрузка...'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : data ? (
				routesSwitch()
			) : (
				<Empty title={'Коллекции отсутствуют'} />
			)}
		</section>
	)
}

export default connect(
	state => ({
		catalog: catalogSelector(state),
	}),
	{}
)(Catalog)
