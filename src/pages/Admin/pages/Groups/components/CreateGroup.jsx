import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'

import { validateCreateGroup as validate } from '../../../../../utils/validators'

import { useSetToast } from '../../../../../hooks'

export const FormCreateGroup = ({
	groups,
	setNewGroup,
	handleSubmit,
	submitting,
	reset,
	valid,
}) => {
	const [topLavel, setTopLavel] = useState(false)
	const { setToast } = useSetToast()

	const onSubmit = body => {
		setNewGroup(body, setToast, reset)
		setTopLavel(false)
	}

	const getTopLavelGroups = () => {
		const topLavelGroups = groups.filter(item => item.parentId === '0')
		return topLavelGroups
	}

	const onChangeParent = e => {
		const id = e.currentTarget.value
		if (id === '0') {
			return setTopLavel(true)
		}
		setTopLavel(false)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Создать категрорию</h2>
			<Field
				fieldName={'select'}
				component={FormItem}
				name={'parentId'}
				label={'Выберите родителя'}
				onChange={onChangeParent}
			>
				<option></option>
				<option value={'0'}>Верхний уровень</option>
				{groups && <OptionsList groups={getTopLavelGroups()} />}
			</Field>
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
			{topLavel && (
				<Field
					component={FormItem}
					type={'text'}
					name={'image'}
					label={'Укажите картинку (для верхнего уровня)'}
				/>
			)}

			<button
				type={'submit'}
				className={'button'}
				disabled={submitting || !valid}
			>
				Добавить
			</button>
		</form>
	)
}

export const CreateGroup = reduxForm({ form: 'createGroup', validate })(
	FormCreateGroup
)
