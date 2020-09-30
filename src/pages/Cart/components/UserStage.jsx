import React, { useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem } from '../../../components'
import { validateUserstage as validate } from '../../../utils/validators/orderValidators'

const UserStageForm = ({
	isActive,
	toAddressStage,
	userData,
	setState,
	valid,
	submitting,
	handleSubmit,
	initialize,
}) => {
	useEffect(() => {
		if (userData) {
			initialize({ ...userData })
		}
	}, [userData, initialize])

	const onSubmit = values => {
		setState(prevState => ({ ...prevState, userData: { ...values } }))
		toAddressStage()
	}

	return (
		<form
			className={`stage${isActive ? ' active' : ''}`}
			onSubmit={handleSubmit(onSubmit)}
		>
			<h3 className={'form-title item'}>Укажите контактные данные</h3>
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
			<div className={'button-wrapper'}>
				<button
					type={'submit'}
					className={'button'}
					disabled={submitting || !valid}
				>
					Далее
				</button>
			</div>
		</form>
	)
}

export const UserStage = reduxForm({ form: 'userStage', validate })(
	UserStageForm
)
