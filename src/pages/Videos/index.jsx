import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BreadCrumbs, Empty, Error, Preloader, Videos } from '../../components'
import { getVideos } from './redux/actions'
import { videosSelector } from './redux/selectors'

const VideosPage = ({ videos: { data, isLoading, errorMsg }, getVideos }) => {
	useEffect(() => {
		if (!data) {
			getVideos()
		}
	}, [getVideos, data])

	return (
		<section className={'videos-page'}>
			<BreadCrumbs lastElementName={'Обучающие видео'} />
			<h2 className={'page-title'}>Обучающие видео с нашего YouTube канала</h2>
			{isLoading ? (
				<Preloader title={'Загрузка видео...'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : data && data.length > 0 ? (
				<Videos videos={data} />
			) : (
				<Empty title={'Видео не найдены'} />
			)}
		</section>
	)
}

export default connect(
	state => ({
		videos: videosSelector(state),
	}),
	{ getVideos }
)(VideosPage)
