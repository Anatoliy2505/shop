import React, { useEffect, useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Empty, Error, FormItem, Preloader } from '../../../../../components'

import { OptionsList } from '../../../components'

import { validateVideos as validate } from '../../../../../utils/validators'

import { useSetToast } from '../../../../../hooks'

const UpdateVideoForm = ({
	videos,
	isLoading,
	errorMsg,
	updateVideoAction,
	getAllVideosAction,
	handleSubmit,
	submitting,
	reset,
	valid,
	change,
	initialize,
}) => {
	const [video, setVideo] = useState(null)
	const { setToast } = useSetToast()

	useEffect(() => {
		if (video) {
			initialize({ ...video, videoId: video._id })
		}
	}, [video, initialize])

	const onChangeVideo = event => {
		const id = event.currentTarget.value
		if (id) {
			const video = videos.find(item => item._id === id)
			setVideo(video)
		} else {
			setVideo(null)
		}
	}

	const resetAll = async () => {
		setVideo(() => null)
		await reset()
		await change('videoId', '')
		getAllVideosAction()
	}

	const onSubmit = values => {
		let isChangedFields = false
		for (let key in video) {
			if (key in values && String(video[key]) !== String(values[key])) {
				isChangedFields = true
				break
			}
		}
		if (isChangedFields) {
			updateVideoAction(values, setToast, resetAll)
		} else {
			setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message: 'Измените хоть одно поле!',
				},
			})
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
						<>
							<Field
								component={FormItem}
								type={'text'}
								name={'title'}
								label={'Название видео'}
							/>
							<Field
								component={FormItem}
								type={'text'}
								name={'link'}
								label={'Ссылка на видео'}
							/>
							<Field
								component={FormItem}
								type={'text'}
								name={'description'}
								label={'Описание для видео'}
							/>
							<Field
								component={FormItem}
								type={'number'}
								min={0}
								max={1000}
								name={'sort'}
								label={'Изменить порядковый номер'}
							/>
							<Field
								component={FormItem}
								type={'checkbox'}
								name={'active'}
								label={'Отображать видео'}
							/>

							<button
								type={'submit'}
								className={'button'}
								disabled={submitting || !valid}
							>
								Изменить видео
							</button>
						</>
					) : null}
				</>
			) : (
				<Empty title={'Добавьте хоть один видео элемент'} />
			)}
		</form>
	)
}

export const UpdateVideo = reduxForm({ form: 'updateVideo', validate })(
	UpdateVideoForm
)
