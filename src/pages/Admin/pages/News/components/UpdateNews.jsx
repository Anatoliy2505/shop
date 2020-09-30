import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'
import { validateUpdateNews as validate } from '../../../../../utils/validators'
import { useSetToast } from '../../../../../hooks'

const UpdateNewsForm = ({
	news,
	updateNews,
	getAllNews,
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
	const [newsData, setNewsData] = useState(null)
	const { setToast } = useSetToast()

	useEffect(() => {
		if (!isInitialize && newsData) {
			untouch('image')
			change('image', null)
			change('isNewImage', false)
			const { image, ...rest } = newsData
			initialize(
				{
					oldImage: image,
					...rest,
				},
				true
			)
			setIsInitialize(() => true)
		}
	}, [isInitialize, initialize, untouch, newsData, change])

	const onChoiceNews = event => {
		const id = event.currentTarget.value
		if (!!id) {
			const newsItem = news.find(item => item._id === id)
			setNewsData(() => {
				setIsInitialize(false)
				setIsVisibleImage(false)
				return newsItem
			})
		} else {
			setNewsData(() => {
				setIsInitialize(false)
				setIsVisibleImage(false)
				return null
			})
		}
	}

	const resetAll = () => {
		reset()
		setNewsData(() => null)
		setIsInitialize(() => false)
		setIsVisibleImage(() => false)
		getAllNews()
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
			for (let key in newsData) {
				if (
					key in data &&
					key !== 'image' &&
					String(newsData[key]) !== String(data[key])
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
		updateNews(data, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Изменить новость</h2>
			<>
				{news && news.length > 0 ? (
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'newsId'}
						label={'Выберите новость'}
						onChange={onChoiceNews}
					>
						<option></option>
						<OptionsList groups={news} />
					</Field>
				) : (
					<div>Создайте хоть одину новость</div>
				)}
				{newsData && (
					<>
						<Field
							component={FormItem}
							type={'text'}
							name={'title'}
							label={'Измените название'}
						/>
						<Field
							component={FormItem}
							type={'text'}
							name={'name'}
							label={'Измените название на английском'}
						/>
						<Field
							component={FormItem}
							fieldName={'textarea'}
							name={'litleDesc'}
							label={'Измените краткое описание'}
						/>
						<Field
							component={FormItem}
							fieldName={'textarea'}
							name={'description'}
							label={'Измените описание'}
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
							name={'date'}
							type={'date'}
							label={'Изменить дату'}
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
								src={process.env.PUBLIC_URL + newsData.image}
								title={newsData.title}
								alt={newsData.title}
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
							Изменить новость
						</button>
					</>
				)}
			</>
		</form>
	)
}

export const UpdateNews = reduxForm({ form: 'updateNews', validate })(
	UpdateNewsForm
)
