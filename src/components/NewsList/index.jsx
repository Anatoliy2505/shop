import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { NewsListItem } from '../NewsListItem'

import './NewsList.scss'

export const NewsList = ({ data, isHome }) => {
	const createNewsItems = news =>
		news.map(item => {
			return <NewsListItem key={item.id} {...item} />
		})

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
					<h1 className={'page-title'}>Сибирский Лов - Наши новости</h1>
				)}
				{data ? (
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
