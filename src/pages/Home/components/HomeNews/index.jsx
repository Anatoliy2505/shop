import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { NewsList } from '../../../../components'
import { newsPartSelector } from '../../../News/redux/selectors'
import { getNews } from '../../../News/redux/actions'

const HomeNews = ({ news, getNews }) => {
	useEffect(() => {
		if (!news) getNews()
	}, [news, getNews])
	return <>{news ? <NewsList data={news} isHome={true} /> : null}</>
}

export default connect(
	state => ({
		news: newsPartSelector(state),
	}),
	{ getNews }
)(HomeNews)
