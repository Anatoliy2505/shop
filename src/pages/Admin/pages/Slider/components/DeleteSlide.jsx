import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'
import { useSetToast } from '../../../../../hooks'

const DeleteSlideForm = ({
	slides,
	getAllSlides,
	removeSlide,
	handleSubmit,
	submitting,
	valid,
	reset,
}) => {
	const [slide, setSlide] = useState(false)
	const { setToast } = useSetToast()

	const onChoiceSlide = event => {
		const id = event.currentTarget.value
		if (!!id) {
			setSlide(() => slides.find(item => item._id === id))
		} else {
			setSlide(null)
		}
	}

	const resetAll = () => {
		reset()
		getAllSlides()
	}

	const onSubmit = values => {
		const body = { ...values, title: slide.title, image: slide.image }
		removeSlide(body, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Удалить слайд</h2>
			<>
				{slides && slides.length > 0 ? (
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'slideId'}
						label={'Выберите слайд'}
						onChange={onChoiceSlide}
					>
						<option></option>
						<OptionsList groups={slides} />
					</Field>
				) : (
					<div>Создайте хоть один слайд</div>
				)}
				{slide && (
					<button
						type={'submit'}
						className={'button'}
						disabled={submitting || !valid}
					>
						Удалить слайд
					</button>
				)}
			</>
		</form>
	)
}

export const DeleteSlide = reduxForm({ form: 'deleteSlide' })(DeleteSlideForm)
