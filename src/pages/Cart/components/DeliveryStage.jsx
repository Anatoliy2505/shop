import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem } from '../../../components'
import { validateDeliveryStage as validate } from '../../../utils/validators/orderValidators'

const DeliveryStageForm = ({
	isActive,
	toAddressStage,
	sending,
	onSubmit,
	valid,
	submitting,
	handleSubmit,
}) => {
	return (
		<form
			className={`stage${isActive ? ' active' : ''}`}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Field
				fieldName={'select'}
				component={FormItem}
				name={'delivery'}
				label={'Способ доставки'}
			>
				<option></option>
				<option value={'postal'}>Почтой России</option>
				<option value={'tk'}>Транспортной компанией (СДЭК)</option>
			</Field>
			<Field
				fieldName={'select'}
				component={FormItem}
				name={'communication'}
				label={'Способ связи'}
			>
				<option></option>
				<option value={'phone'}>По телефону</option>
				<option value={'email'}>По электронной почте</option>
			</Field>
			<Field
				fieldName={'select'}
				component={FormItem}
				name={'payType'}
				label={'Способ оплаты'}
			>
				<option></option>
				<option value={'bankcard'}>Банковской картой</option>
				<option value={'cashOnDelivery'}>Наложенный платёж</option>
			</Field>
			<Field
				fieldName={'textarea'}
				component={FormItem}
				name={'comments'}
				label={'Оставить комментарий'}
				rows={3}
			/>
			<div className={'button-wrapper'}>
				<button
					type={'submit'}
					className={'button'}
					disabled={submitting || !valid || sending}
				>
					Заказать
				</button>
				<input
					type="button"
					className={'button'}
					onClick={toAddressStage}
					value={'Назад'}
				/>
			</div>
		</form>
	)
}

export const DeliveryStage = reduxForm({
	form: 'deliveryStage',
	initialValues: {
		comments: '',
	},
	validate,
})(DeliveryStageForm)
