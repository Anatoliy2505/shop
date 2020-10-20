import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Empty, Error, FormItem, Preloader } from '../../../../../components'
import { OptionsList } from '../../../components'

import { useSetToast } from '../../../../../hooks'

const DeleteVideoForm = ({
	removeVideoAction,
	getAllVideosAction,
	videos,
	isLoading,
	errorMsg,
	handleSubmit,
	submitting,
	reset,
	valid,
}) => {
	const [video, setVideo] = useState(null)

	const { setToast } = useSetToast()

	const onChangeVideo = event => {
		const id = event.currentTarget.value
		if (id) {
			const video = videos.find(item => item._id === id)
			if (video) {
				return setVideo({ title: video.title, videoId: id })
			}
		}
		setVideo(null)
	}

	const resetAll = () => {
		reset()
		getAllVideosAction()
	}

	const onSubmit = () => {
		if (video) {
			removeVideoAction(video, setToast, resetAll)
		}
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Изменить видео элемент</h2>
			{isLoading ? (
				<Preloader title={'Поиск виде...'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : videos ? (
				<>
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'videoId'}
						label={'Выбирите видео для редактирования'}
						onChange={onChangeVideo}
					>
						<option></option>
						<OptionsList groups={videos} />
					</Field>
					{video ? (
						<button
							type={'submit'}
							className={'button'}
							disabled={submitting || !valid}
						>
							Удалить видео
						</button>
					) : null}
				</>
			) : (
				<Empty title={'Добавьте хоть один видео элемент'} />
			)}
		</form>
	)
}

export const DeleteVideo = reduxForm({ form: 'deleteVideo' })(DeleteVideoForm)
