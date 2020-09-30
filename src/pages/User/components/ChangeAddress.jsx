import React, { useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem } from '../../../components/FormItem'
import { validateChangeAddress as validate } from '../../../utils/validators/userValidators'

import { useSetToast } from '../../../hooks/useSetToast'

const ChangeAddressForm = ({
	close,
	addressData,
	action,
	handleSubmit,
	submitting,
	valid,
	initialize,
	reset,
}) => {
	const { setToast } = useSetToast()

	useEffect(() => {
		if (addressData) {
			initialize({ ...addressData })
		}
	}, [addressData, initialize])

	const resetAll = () => {
		reset()
		close()
	}

	const onSubmit = values => {
		action(values, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Изменить адрес доставки</h2>
			<Field component={FormItem} type={'text'} name={'city'} label={'Город'} />
			<Field
				component={FormItem}
				type={'text'}
				name={'street'}
				label={'Улица'}
			/>
			<Field component={FormItem} type={'text'} name={'house'} label={'Дом'} />
			<Field
				component={FormItem}
				type={'text'}
				name={'flat'}
				label={'Квартира'}
			/>
			<Field
				component={FormItem}
				type={'text'}
				name={'index'}
				label={'Индекс'}
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

export const ChangeAddress = reduxForm({ form: 'changeAddress', validate })(
	ChangeAddressForm
)
