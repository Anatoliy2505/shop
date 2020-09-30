import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

import { NewsListItem } from '../NewsListItem'
import { BreadCrumbs } from '../BreadCrumbs'

import PropTypes from 'prop-types'

import './NewsList.scss'

export const NewsList = ({ data, isHome = false }) => {
	const createNewsItems = useCallback(
		() =>
			data.map(item => {
				return <NewsListItem key={item._id} {...item} />
			}),
		[data]
	)

	return (
		<section className={'news'}>
			<>
				{isHome ? (
					<h2 className={'section-title'}>
						<Link
							to={'/news'}
							className={'section-title__wrap'}
							title={'Перейти ко всем новостям'}
						>
							Новости
						</Link>
					</h2>
				) : (
					<>
						<BreadCrumbs routes={null} lastElementName={'Наши новости'} />
						<h1 className={'page-title'}>Сибирский Лов - Наши новости</h1>
					</>
				)}
				{data && data.length > 0 ? (
					<div className={'news-list'}>{createNewsItems(data)}</div>
				) : null}
			</>
		</section>
	)
}

NewsList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object),
	isHome: PropTypes.bool,
}
