import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../index'

const ReduxFormChangeGroup = ({ groups, handleSubmit, submitting, valid }) => {
	const [category, changeCategory] = useState(null)

	const reduceGroupTree = groups =>
		groups.reduce((accumulator, currentValue) => {
			const { children, ...rest } = currentValue
			if (children) {
				return [...accumulator, rest, ...children]
			}
			return [...accumulator, rest]
		}, [])

	const [categories] = useState(reduceGroupTree(groups) || null)

	console.log(category)

	const onSubmit = () => {
		return false
	}

	const onChangeCategory = event => {
		const id = event.currentTarget.value
		if (!!id) {
			changeCategory(categories.find(item => item.id === +id))
		} else {
			changeCategory(null)
		}
	}

	return (
		<>
			{categories ? (
				<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
					<h2 className={'form-title'}>Создать категрорию</h2>
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
								value={category.title}
							/>
							<Field
								component={FormItem}
								type={'text'}
								name={'category-name'}
								label={'Измените название на английском'}
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

export const FormChangeGroup = reduxForm({ form: 'changeGroup' })(
	ReduxFormChangeGroup
)
