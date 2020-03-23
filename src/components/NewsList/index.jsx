import React from 'react'
import { Link } from 'react-router-dom'

import './NewsList.scss'
import { NewsListItem } from '../NewsListItem'

const NewsList = ({ data, isHome }) => {
	const newsItems = news =>
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
				{data ? <div className={'news-list'}>{newsItems(data)}</div> : null}
			</>
		</section>
	)
}

export { NewsList }
