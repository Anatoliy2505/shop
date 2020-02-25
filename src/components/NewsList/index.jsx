import React from 'react'
import { Link } from 'react-router-dom'

import './NewsList.scss'

const NewsList = ({ data, isHome }) => {
	const newsItems = news =>
		news.map(item => {
			return (
				<Link
					key={item.id}
					to={`/news/${item.id}`}
					className={'news-item'}
					title={'Перейти к новости'}
				>
					<div className={'news-item__inner'}>
						<div className={'news-item__img'}>
							<img src={item.imgPath} alt={item.title} />
						</div>
						<div className={'news-item__desc'}>
							{isHome ? item.litleDesc : item.desc}
						</div>
						<div className={'news-item__date'}>{item.date} г.</div>
					</div>
				</Link>
			)
		})

	return (
		<>
			{data ? (
				<>
					<h2 className={'section-title'}>
						{isHome ? (
							<Link
								to={'/news'}
								className={'section-title__wrap'}
								title={'Перейти ко всем новостям'}
							>
								Новости
							</Link>
						) : (
							'Все новости'
						)}
					</h2>
					<div className={'news-list'}>{newsItems(data)}</div>
				</>
			) : null}
		</>
	)
}

export { NewsList }
