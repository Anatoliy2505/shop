import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem } from '../../../../../components'

import { validateVideos as validate } from '../../../../../utils/validators'

import { useSetToast } from '../../../../../hooks'

const CreateVideoForm = ({
	createVideoAction,
	getAllVideosAction,
	handleSubmit,
	submitting,
	reset,
	valid,
}) => {
	const { setToast } = useSetToast()

	const resetAll = () => {
		reset()
		getAllVideosAction()
	}

	const onSubmit = body => {
		createVideoAction(body, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Создать видео элемент</h2>
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
				label={'Укажите порядковый номер'}
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
				Добавить
			</button>
		</form>
	)
}

export const CreateVideo = reduxForm({
	form: 'createVideo',
	initialValues: {
		sort: 999,
		active: true,
	},
	validate,
})(CreateVideoForm)
