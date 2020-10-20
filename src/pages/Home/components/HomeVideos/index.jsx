import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { videosPartSelector } from '../../../Videos/redux/selectors'
import { Videos } from '../../../../components'
import { getVideos } from '../../../Videos/redux/actions'
import { Link } from 'react-router-dom'

const HomeVideos = ({ videos, getVideos }) => {
	useEffect(() => {
		if (!videos) {
			getVideos()
		}
	}, [getVideos, videos])

	return (
		<>
			{videos && videos.length > 0 ? (
				<section className={'home-videos'}>
					<h2 className={'section-title'}>
						<Link
							to={'/video'}
							className={'section-title__wrap'}
							title={'Смотреть все видео'}
						>
							Обучающие видео
						</Link>
					</h2>
					<Videos videos={videos} isHome={true} />
				</section>
			) : null}
		</>
	)
}

export default connect(
	state => ({
		videos: videosPartSelector(state),
	}),
	{ getVideos }
)(HomeVideos)
