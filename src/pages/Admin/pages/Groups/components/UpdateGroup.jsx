import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'
import { validateChangeGroup as validate } from '../../../../../utils/validators'
import { useSetToast } from '../../../../../hooks'

const FormUpdateGroup = ({
	groups,
	rawData,
	changeGroup,
	handleSubmit,
	submitting,
	valid,
	untouch,
	initialize,
	change,
}) => {
	const [categories, setCategories] = useState(rawData || null)
	const [category, setCategory] = useState(null)
	const { setToast } = useSetToast()

	useEffect(() => {
		if (category) {
			untouch('image')
			change('image', null)
			initialize(
				{
					title: category.title,
					name: category.name,
					parentId: category.parentId,
				},
				true
			)
		}
	}, [category, initialize, untouch, change])

	useEffect(() => {
		setCategories(rawData)

		setCategory(category => {
			if (category) return rawData.find(item => item._id === category._id)
		})
	}, [rawData])

	const onSubmit = value => {
		if (
			category.parentId === value['parentId'] &&
			category.title === value['title'] &&
			category.name === value['name']
		) {
			setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message: 'Измените хотя бы одно поле!',
				},
			})
		} else {
			changeGroup(value, setToast)
		}
	}

	const onChangeCategory = event => {
		const id = event.currentTarget.value
		if (!!id) {
			setCategory(categories.find(item => item._id === id))
		} else {
			setCategory(null)
		}
	}

	return (
		<>
			{categories ? (
				<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
					<h2 className={'form-title'}>Редактировать категорию</h2>
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'categoryId'}
						label={'Выбирите категорию для редактирования'}
						onChange={onChangeCategory}
					>
						<option className={'default-option-name'}>
							Выбирите из списка
						</option>
						{groups && <OptionsList groups={groups} />}
					</Field>
					{category && (
						<>
							<Field
								fieldName={'select'}
								component={FormItem}
								name={'parentId'}
								label={'Выборать родительскую категрорию'}
							>
								<option className={'default-option-name'}>
									Выбирите из списка
								</option>
								<option value={'0'}>Верхний уровень</option>
								{groups && <OptionsList groups={groups} />}
							</Field>
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
							{category.image && (
								<Field
									component={FormItem}
									type={'text'}
									name={'image'}
									label={'Укажите картинку (для верхнего уровня)'}
								/>
							)}

							<button
								type={'subbmit'}
								className={'button'}
								disabled={submitting || !valid}
							>
								Сохранить изменения
							</button>
						</>
					)}
				</form>
			) : (
				<h2 className={'form-title'}>Добавьте хоть одну категорию</h2>
			)}
		</>
	)
}

export const UpdateGroup = reduxForm({ form: 'updateGroup', validate })(
	FormUpdateGroup
)
