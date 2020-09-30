import React, { useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem } from '../../../components'
import { validateChangeUserData as validate } from '../../../utils/validators/userValidators'

import { useSetToast } from '../../../hooks/useSetToast'

const ChangeUserForm = ({
	close,
	userData,
	action,
	handleSubmit,
	submitting,
	valid,
	initialize,
	reset,
}) => {
	const { setToast } = useSetToast()

	useEffect(() => {
		if (userData) {
			initialize({ ...userData })
		}
	}, [userData, initialize])

	const resetAll = () => {
		reset()
		close()
	}

	const onSubmit = values => {
		action(values, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Изменить контактные данные</h2>
			<Field
				component={FormItem}
				type={'text'}
				name={'surname'}
				label={'Фамилия'}
			/>
			<Field component={FormItem} type={'text'} name={'name'} label={'Имя'} />
			<Field
				component={FormItem}
				type={'text'}
				name={'middleName'}
				label={'Отчество'}
			/>
			<Field
				component={FormItem}
				type={'email'}
				name={'email'}
				label={'E-mail'}
			/>
			<Field
				component={FormItem}
				type={'tel'}
				name={'phone'}
				label={'Телефон'}
			/>
			<button
				type={'submit'}
				className={'button'}
				disabled={submitting || !valid}
			>
				Изменить
			</button>
		</form>
	)
}

export const ChangeUser = reduxForm({ form: 'changeUserData', validate })(
	ChangeUserForm
)
