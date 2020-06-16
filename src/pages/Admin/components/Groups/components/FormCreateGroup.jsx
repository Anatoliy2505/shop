import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../index'

import { validateCreateGroup as validate } from '../../../../../utils/validators'

export const FormCreateGroupWithRedux = ({
	groups,
	handleSubmit,
	submitting,
	valid,
}) => {
	const onSubmit = body => {
		console.log(body)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Создать категрорию</h2>
			<Field
				fieldName={'select'}
				component={FormItem}
				name={'select-parent'}
				label={'Выберите родителя'}
			>
				<option></option>
				<option value={'0'}>Верхний уровень</option>
				{groups && <OptionsList groups={groups} />}
			</Field>
			<Field
				component={FormItem}
				type={'text'}
				name={'category-title'}
				label={'Введите название'}
			/>
			<Field
				component={FormItem}
				type={'text'}
				name={'category-name'}
				label={'Введите название на английском'}
			/>
			<Field
				component={FormItem}
				type={'text'}
				name={'category-image'}
				label={'Укажите кортинку (для верхнего уровня)'}
			/>
			<button
				tupe={'submit'}
				className={'button'}
				disabled={submitting || !valid}
			>
				Добавить
			</button>
		</form>
	)
}

export const FormCreateGroup = reduxForm({ form: 'createGroup', validate })(
	FormCreateGroupWithRedux
)
