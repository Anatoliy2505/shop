import React, { useCallback, useMemo } from 'react'
import { useParams } from 'react-router'
import { format } from 'date-fns'

import './NewsItem.scss'
import { BreadCrumbs } from '../../../../components'

export const NewsItem = ({ data }) => {
	const { news } = useParams()

	const newsData = useMemo(() => {
		if (data && data.length > 0) {
			return data.find(item => item.name === news)
		}
		return false
	}, [data, news])

	const getNews = useCallback(() => {
		if (newsData) {
			const { image, date, title, description } = newsData
			return (
				<>
					<h1 className={'hidden'}>{title}</h1>
					<img
						className={'news-one__img'}
						src={process.env.PUBLIC_URL + image}
						alt={title}
					/>
					<h2 className={'news-one__title'}>{title}</h2>
					<p className={'news-one__desc'}>{description}</p>
					<p className={'news-one__date'}>{format(date, 'DD.MM.YYYY')} г.</p>
				</>
			)
		}
		return null
	}, [newsData])

	return (
		<div className={'news-one'}>
			<BreadCrumbs
				routes={[{ path: '/news', title: 'Наши новости' }]}
				lastElementName={newsData ? newsData.title : 'Новость не найдена'}
			/>
			{newsData ? (
				getNews()
			) : (
				<h1 className={'page-title'}>Новость не найдена</h1>
			)}
		</div>
	)
}
