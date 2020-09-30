import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'
import { useSetToast } from '../../../../../hooks'

const DeleteNewsForm = ({
	news,
	getAllNews,
	removeNews,
	handleSubmit,
	submitting,
	valid,
	reset,
}) => {
	const [newsData, setNewsData] = useState(false)
	const { setToast } = useSetToast()

	const onChoiceNews = event => {
		const id = event.currentTarget.value
		if (!!id) {
			setNewsData(() => news.find(item => item._id === id))
		} else {
			setNewsData(null)
		}
	}

	const resetAll = () => {
		reset()
		getAllNews()
	}

	const onSubmit = values => {
		const body = { ...values, title: newsData.title, image: newsData.image }
		removeNews(body, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Удалить новость</h2>
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
					<button
						type={'submit'}
						className={'button'}
						disabled={submitting || !valid}
					>
						Удалить новость
					</button>
				)}
			</>
		</form>
	)
}

export const DeleteNews = reduxForm({ form: 'deleteNews' })(DeleteNewsForm)
