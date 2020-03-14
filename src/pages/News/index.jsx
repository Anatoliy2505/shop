import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { NewsList, BreadCrumbs } from '../../components'
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

	let routes = null,
		lastElementName = null

	const choiceElement = (data, id, routes, lastElementName) => {
		if (id) {
			const item = selectNews(data, id)
			if (item) {
				routes = [{ path: '/news', title: 'Наши новости' }]
				lastElementName = item.title
				return <NewsItem {...item} />
			} else {
				return <div className={'error'}>Новость не найдена</div>
			}
		}
		return <NewsList data={data} />
	}

	return (
		<section className={'news'}>
			<BreadCrumbs lastElementName={'Наши новости'} />
			{isLoading ? (
				<div className={'loading'}>Loading...</div>
			) : data ? (
				choiceElement(data, params.news, routes, lastElementName)
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
