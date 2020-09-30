import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem } from '../../../components'

import { validateCreateSlide as validate } from '../../../../../utils/validators'

import { useSetToast } from '../../../../../hooks'

export const CreateSlideForm = ({
	createSlide,
	getSlides,
	handleSubmit,
	submitting,
	reset,
	valid,
}) => {
	const { setToast } = useSetToast()

	const resetAll = () => {
		reset()
		getSlides()
	}

	const onSubmit = values => {
		const { image, ...rest } = values
		const newImage = image[0]
		const body = { ...rest, image: newImage }
		createSlide(body, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Создать слайд</h2>
			<Field
				component={FormItem}
				type={'text'}
				name={'title'}
				label={'Введите название'}
			/>
			<Field
				component={FormItem}
				fieldName={'textarea'}
				name={'description'}
				label={'Введите описание'}
			/>
			<Field
				component={FormItem}
				type={'number'}
				name={'sort'}
				min={0}
				label={'Позиция слайда'}
			/>
			<Field
				component={FormItem}
				type={'checkbox'}
				name={'active'}
				label={'Показывать слайд'}
			/>
			<Field
				component={FormItem}
				type={'file'}
				name={'image'}
				label={'Загрузите картинку'}
			/>
			<button
				type={'submit'}
				className={'button'}
				disabled={submitting || !valid}
			>
				Добавить слайд
			</button>
		</form>
	)
}

export const CreateSlide = reduxForm({
	form: 'createSlide',
	initialValues: { sort: 999, active: true },
	validate,
})(CreateSlideForm)
