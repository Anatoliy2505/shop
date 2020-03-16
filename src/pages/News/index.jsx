import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import { NewsList, BreadCrumbs } from '../../components'
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

	if (data) {
		if (news) {
			newsItem = !isNaN(news)
				? selectNews(data, 'id', news)
				: selectNews(data, 'name', news)
			issetParams = true
			if (newsItem) {
				newsElement = <NewsItem {...newsItem} />
			} else {
				newsElement = <div className={'empty'}>Новость не найдена</div>
			}
		} else {
			newsElement = <NewsList data={data} />
		}
	}

	return (
		<section className={'news'}>
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
				<div className={'loading'}>Loading...</div>
			) : errorMsg ? (
				<div className={'error'}>{errorMsg}</div>
			) : newsElement ? (
				newsElement
			) : (
				<div className={'empty'}>Новостей пока нет</div>
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
