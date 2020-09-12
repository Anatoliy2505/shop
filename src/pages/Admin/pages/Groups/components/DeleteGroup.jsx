import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'
import { validateDeleteGroup as validate } from '../../../../../utils/validators'
import { useSetToast } from '../../../../../hooks'
import { isIssetChildren } from '../../../../../utils/helpers/isIssetChildren'

const FormDeleteGroup = ({
	groups,
	rawData,
	deleteGroup,
	handleSubmit,
	submitting,
	valid,
	reset,
}) => {
	const [categories, setCategories] = useState(rawData || null)
	const [category, setCategory] = useState(null)
	const { setToast } = useSetToast()

	useEffect(() => {
		setCategories(rawData)
		setCategory(null)
	}, [rawData])

	const onSubmit = value => {
		const havechildren = isIssetChildren(rawData, value.categoryId)
		if (havechildren) {
			return setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message: 'Переместите дочерние элементы и коллекции в другую группу!',
				},
			})
		}
		const data = { ...value, title: category.title }
		deleteGroup(data, setToast, reset)
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
					<h2 className={'form-title'}>Удалить категорию</h2>
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'categoryId'}
						label={'Выбирите категорию для удаления'}
						onChange={onChangeCategory}
					>
						<option></option>
						{groups && <OptionsList groups={groups} />}
					</Field>
					{category && (
						<button
							type={'submit'}
							className={'button'}
							disabled={submitting || !valid}
						>
							Удалить категорию
						</button>
					)}
				</form>
			) : (
				<h2 className={'form-title'}>Добавьте хоть одну категорию</h2>
			)}
		</>
	)
}

export const DeleteGroup = reduxForm({ form: 'deleteGroup', validate })(
	FormDeleteGroup
)
