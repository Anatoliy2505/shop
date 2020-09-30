import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'
import { validateUpdateSlide as validate } from '../../../../../utils/validators'
import { useSetToast } from '../../../../../hooks'

const UpdateSlideForm = ({
	slides,
	updateSlide,
	getAllSlides,
	handleSubmit,
	submitting,
	valid,
	untouch,
	initialize,
	change,
	reset,
}) => {
	const [isVisibleImage, setIsVisibleImage] = useState(false)
	const [isInitialize, setIsInitialize] = useState(false)
	const [slide, setSlide] = useState(false)
	const { setToast } = useSetToast()

	useEffect(() => {
		if (!isInitialize && slide) {
			untouch('image')
			change('image', null)
			change('isNewImage', false)
			const { image, ...rest } = slide
			initialize(
				{
					oldImage: image,
					...rest,
				},
				true
			)
			setIsInitialize(() => true)
		}
	}, [isInitialize, initialize, untouch, slide, change])

	const onChoiceSlide = event => {
		const id = event.currentTarget.value
		if (!!id) {
			const slide = slides.find(item => item._id === id)
			setSlide(() => {
				setIsInitialize(() => false)
				setIsVisibleImage(false)
				return slide
			})
		} else {
			setSlide(() => {
				setIsInitialize(() => false)
				setIsVisibleImage(false)
				return false
			})
		}
	}

	const resetAll = () => {
		reset()
		setSlide(null)
		setIsInitialize(() => false)
		setIsVisibleImage(false)
		getAllSlides()
	}

	const onSubmit = values => {
		let data = values
		let isChangeFields = false
		if ('image' in data && !!data.image) {
			const { image, ...newData } = values
			newData.image = image['0']
			data = newData
			isChangeFields = true
		} else {
			for (let key in slide) {
				if (
					key in data &&
					key !== 'image' &&
					String(slide[key]) !== String(data[key])
				) {
					isChangeFields = true
					break
				}
			}
		}

		if (!isChangeFields) {
			setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message: 'Измените хотя бы одно поле!',
				},
			})
			return false
		}
		updateSlide(data, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className="form-title">Изменить слайд</h2>
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
					<>
						<Field
							component={FormItem}
							type={'text'}
							name={'title'}
							label={'Измените название'}
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
						<Field component={'input'} type={'hidden'} name={'oldImage'} />
						<div className={'preview-image'}>
							<img
								src={process.env.PUBLIC_URL + slide.image}
								title={slide.title}
								alt={slide.title}
							/>
						</div>
						<Field
							component={FormItem}
							type={'checkbox'}
							name={'isNewImage'}
							label={'Изменить картинку'}
							onChange={() => {
								setIsVisibleImage(!isVisibleImage)
								change('image', null)
							}}
						/>
						{isVisibleImage && (
							<Field
								component={FormItem}
								type={'file'}
								name={'image'}
								label={'Загрузить новую картинку'}
							/>
						)}

						<button
							type={'submit'}
							className={'button'}
							disabled={submitting || !valid}
						>
							Изменить слайд
						</button>
					</>
				)}
			</>
		</form>
	)
}

export const UpdateSlide = reduxForm({ form: 'updateSlide', validate })(
	UpdateSlideForm
)
