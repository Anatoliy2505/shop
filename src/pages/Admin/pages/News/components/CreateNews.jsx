import React from 'react'

import { reduxForm, Field } from 'redux-form'
import { FormItem } from '../../../components'

import { validateCreateNews as validate } from '../../../../../utils/validators'

import { useSetToast } from '../../../../../hooks'

export const CreateNewsForm = ({
	createNews,
	getNews,
	handleSubmit,
	submitting,
	reset,
	valid,
}) => {
	const { setToast } = useSetToast()

	const resetAll = () => {
		reset()
		getNews()
	}

	const onSubmit = values => {
		const { image, ...rest } = values
		const newImage = image[0]
		const body = { ...rest, image: newImage }
		createNews(body, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Создать новость</h2>
			<Field
				component={FormItem}
				type={'text'}
				name={'title'}
				label={'Введите название'}
			/>
			<Field
				component={FormItem}
				type={'text'}
				name={'name'}
				label={'Введите название на английском'}
			/>
			<Field
				component={FormItem}
				fieldName={'textarea'}
				name={'litleDesc'}
				label={'Напишите краткое содержание'}
			/>
			<Field
				component={FormItem}
				fieldName={'textarea'}
				name={'description'}
				label={'Напишите содержание'}
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
				type={'date'}
				name={'date'}
				label={'Укажите дату'}
				onChange={value => console.log(value)}
			/>
			<Field
				component={FormItem}
				type={'checkbox'}
				name={'active'}
				label={'Показывать новость'}
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
				Добавить новость
			</button>
		</form>
	)
}

export const CreateNews = reduxForm({
	form: 'createNews',
	initialValues: { sort: 999, active: true, date: +new Date() },
	validate,
})(CreateNewsForm)
