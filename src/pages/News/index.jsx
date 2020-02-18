import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { NewsList } from '../../components'
import { newsAllSelector } from './redux/selctors'
import { getNews } from './redux/actions'

const News = ({ news: { data, isLoading, errorMsg }, getNews }) => {
	useEffect(() => {
		if (!data) {
			getNews()
		}
	}, [data, getNews])

	return (
		<section className={'news'}>
			{isLoading ? (
				<div className={'loading'}>Loading...</div>
			) : data ? (
				<NewsList data={data} />
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
