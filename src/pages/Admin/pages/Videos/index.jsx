import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { AdminActions } from '../../components'
import { CreateVideo, UpdateVideo, DeleteVideo } from './components'

import {
	removeVideoAction,
	updateVideoAction,
	createVideoAction,
} from './redux/actions'
import { getAllVideosAction } from '../../../Videos/redux/actions'
import { videosSelector } from '../../../Videos/redux/selectors'

export const Collections = ({
	videos: { data, isLoading, errorMsg },
	getAllVideosAction,
	createVideoAction,
	updateVideoAction,
	removeVideoAction,
}) => {
	const isMounted = useRef(false)

	useEffect(() => {
		if (!isMounted.current) {
			getAllVideosAction()
			isMounted.current = true
		}
	}, [isMounted, getAllVideosAction])

	return (
		<>
			<h1 className={'page-title'}>Работа с видео</h1>
			<AdminActions
				create={{
					component: CreateVideo,
					videos: data,
					isLoading,
					errorMsg,
					createVideoAction,
					getAllVideosAction,
				}}
				update={{
					component: UpdateVideo,
					videos: data,
					isLoading,
					errorMsg,
					updateVideoAction,
					getAllVideosAction,
				}}
				delete={{
					component: DeleteVideo,
					videos: data,
					isLoading,
					errorMsg,
					removeVideoAction,
					getAllVideosAction,
				}}
			/>
		</>
	)
}

export default connect(
	state => ({
		videos: videosSelector(state),
	}),
	{
		getAllVideosAction,
		createVideoAction,
		updateVideoAction,
		removeVideoAction,
	}
)(Collections)
