import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { AdminActions } from '../../components'
import { CreateNews, UpdateNews, DeleteNews } from './components'
import { createNews, updateNews, removeNews, getAllNews } from './redux/actions'
import { getAllNewsSelector } from './redux/selectors'
export const Groups = ({
	news,
	createNews,
	updateNews,
	removeNews,
	getAllNews,
}) => {
	useEffect(() => {
		if (!news) {
			getAllNews()
		}
	}, [news, getAllNews])

	return (
		<>
			<h1 className={'page-title'}>Новости</h1>
			<AdminActions
				create={{ component: CreateNews, createNews, getAllNews }}
				update={{
					component: UpdateNews,
					news,
					updateNews,
					getAllNews,
				}}
				delete={{
					component: DeleteNews,
					news,
					removeNews,
					getAllNews,
				}}
			/>
		</>
	)
}

export default connect(
	state => ({
		news: getAllNewsSelector(state),
	}),
	{ createNews, updateNews, removeNews, getAllNews }
)(Groups)
