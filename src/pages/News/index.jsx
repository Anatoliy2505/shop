import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { NewsList } from '../../components'
import { newsAllSelector } from './redux/selectors'
import { getNews } from './redux/actions'
import { NewsItem } from './components'

const News = ({
	news: { data, isLoading, errorMsg },
	match: { params },
	getNews,
}) => {
	useEffect(() => {
		if (!data) {
			getNews()
		}
	}, [data, getNews])

	const selectNews = (news, id) =>
		news.find(item => Number(item.id) === Number(id))

	const choiceElement = (data, id) => {
		if (id) {
			const item = selectNews(data, id)
			return item ? (
				<NewsItem {...item} />
			) : (
				<div className={'error'}>Новость не найдена</div>
			)
		}
		return <NewsList data={data} />
	}

	return (
		<section className={'news'}>
			{isLoading ? (
				<div className={'loading'}>Loading...</div>
			) : data ? (
				choiceElement(data, params.news)
			) : errorMsg ? (
				<div className={'error'}>{errorMsg}</div>
			) : (
				<div className={'empty'}>Empty...</div>
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
