import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { catalogSelector } from './redux/selectors'
import { BreadCrumbs, Preloader, Empty, Error } from '../../components'
import { routes } from './routes'

const Catalog = ({
	catalog: { data, isLoading, errorMsg, viewElements = 5 },
}) => {
	const [title, setTitle] = useState('Поиск...')
	const [breacCrumbsRoutes, setRoutes] = useState(null)

	const routesSwitch = () =>
		routes.length &&
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
		})

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
