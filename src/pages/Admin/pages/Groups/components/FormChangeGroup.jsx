import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'
import { validateChangeGroup as validate } from '../../../../../utils/validators'
import { reduceGroupTree } from '../../../../../utils/helpers/reduceGroupTree'
import { useSetToast } from '../../../../../hooks'

const ReduxFormChangeGroup = ({
	groups,
	handleSubmit,
	submitting,
	valid,
	change,
	clearAsyncError,
}) => {
	const [categories] = useState(reduceGroupTree(groups) || null)
	const [category, changeCategory] = useState(null)
	const { setToast } = useSetToast()

	useEffect(() => {
		if (category) {
			clearAsyncError('category-image')
			change('category-title', category.title)
			change('category-name', category.name)
			change('select-parent', category.parentId)
		}
	}, [category, change, clearAsyncError])

	const onSubmit = value => {
		if (
			category.parentId === value['select-parent'] &&
			category.title === value['category-title'] &&
			category.name === value['category-name']
		) {
			setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message: 'Измените хотя бы одно поле!',
				},
			})
		} else {
			console.log(value)
		}
	}

	const onChangeCategory = event => {
		const id = event.currentTarget.value
		if (!!id) {
			changeCategory(categories.find(item => item.id + '' === id))
		} else {
			changeCategory(null)
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
						name={'select-category'}
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
								name={'select-parent'}
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
								name={'category-title'}
								label={'Измените название'}
							/>
							<Field
								component={FormItem}
								type={'text'}
								name={'category-name'}
								label={'Измените название на английском'}
							/>
							<Field
								component={FormItem}
								type={'text'}
								name={'category-image'}
								label={'Укажите кортинку (для верхнего уровня)'}
							/>

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

export const FormChangeGroup = reduxForm({ form: 'changeGroup', validate })(
	ReduxFormChangeGroup
)
