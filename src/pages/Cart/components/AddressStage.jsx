import React, { useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem } from '../../../components'
import { validateAddressStage as validate } from '../../../utils/validators/orderValidators'

const AddressStageForm = ({
	isActive,
	setState,
	toUserStage,
	toDeliveryStage,
	addressData,
	valid,
	initialize,
	submitting,
	handleSubmit,
}) => {
	useEffect(() => {
		if (addressData) {
			initialize({ ...addressData })
		}
	}, [initialize, addressData])

	const onSubmit = values => {
		setState(prevState => ({ ...prevState, addressData: { ...values } }))
		toDeliveryStage()
	}

	return (
		<form
			className={`stage${isActive ? ' active' : ''}`}
			onSubmit={handleSubmit(onSubmit)}
		>
			<h3 className={'form-title item'}>Укажите адрес доставки</h3>
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
			<div className={'button-wrapper'}>
				<button
					type={'submit'}
					className={'button'}
					disabled={submitting || !valid}
				>
					Далее
				</button>
				<input
					type={'button'}
					className={'button'}
					onClick={toUserStage}
					value={'Назад'}
				/>
			</div>
		</form>
	)
}

export const AddressStage = reduxForm({ form: 'addressStage', validate })(
	AddressStageForm
)
