import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import {
	NewsList,
	BreadCrumbs,
	Preloader,
	Error,
	Empty,
} from '../../components'
import { newsAllSelector } from './redux/selectors'
import { getNews } from './redux/actions'
import { NewsItem } from './components'

const News = ({ news: { data, isLoading, errorMsg }, getNews }) => {
	useEffect(() => {
		if (!data) {
			getNews()
		}
	}, [data, getNews])

	const { news } = useParams()

	const selectNews = (news, field, data) =>
		news.find(item => String(item[field]) === String(data))

	let newsElement = null
	let issetParams = false
	let newsItem = null
	let title = 'Страница новостей'

	if (data) {
		if (news) {
			newsItem = !isNaN(news)
				? selectNews(data, 'id', news)
				: selectNews(data, 'name', news)
			issetParams = true
			if (newsItem) {
				newsElement = <NewsItem {...newsItem} />
			} else {
				newsElement = (
					<>
						<h1 className={'page-title'}>Новость не найдена</h1>
						<Empty title={'Новость не найдена...'} />
					</>
				)
			}
			title = 'Новость в деталях'
		} else {
			newsElement = <NewsList data={data} />
		}
	}

	return (
		<section className={'news-page'}>
			<h1 className={'hidden'}>{title}</h1>
			<BreadCrumbs
				routes={issetParams ? [{ path: '/news', title: 'Наши новости' }] : null}
				lastElementName={
					!issetParams
						? 'Наши новости'
						: newsItem
						? newsItem.title
						: 'Новость не найдена'
				}
			/>
			{isLoading ? (
				<Preloader title={'Загрузка новостей...'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : newsElement ? (
				newsElement
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
