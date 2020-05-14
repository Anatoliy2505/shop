import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FormItem } from '../FormItem'
import { validateSignupForm as validate } from '../../../../utils/validators'
import './SignupForm.scss'

import { reduxForm, Field } from 'redux-form'
import { registrationAction } from '../../redux/actions'
import { connect } from 'react-redux'
import { Toast } from '../../../../components'

const SignupReduxForm = ({
	handleSubmit,
	submitting,
	valid,
	registrationAction,
}) => {
	const [message, setMessage] = useState(null)

	const submitForm = body => {
		console.log(body)
		registrationAction(body, setMessage)
	}

	return (
		<>
			<div className={'auth-page'}>
				{message ? <Toast data={message} /> : null}
				<form
					onSubmit={handleSubmit(submitForm)}
					action={'post'}
					className={'auth-form'}
				>
					<h1 className={'auth-form__title'}>Регистрация</h1>
					<Field
						component={FormItem}
						type={'text'}
						name={'name'}
						label={'Имя *'}
						placeholder={'Ваше имя'}
					/>
					<Field
						component={FormItem}
						type={'text'}
						name={'surname'}
						label={'Фамилия'}
						placeholder={'Ваша фамилия'}
					/>
					<Field
						component={FormItem}
						type={'email'}
						name={'email'}
						label={'Адрес электронной почты *'}
						placeholder={'Введите email'}
					/>
					<Field
						component={FormItem}
						type={'password'}
						name={'password'}
						label={'Пароль *'}
						placeholder={'Введите пароль'}
					/>
					<Field
						component={FormItem}
						type={'text'}
						name={'confirmPassword'}
						label={'Подтвердите пароль *'}
						placeholder={'Повторите пароль'}
					/>

					<div className={'auth-form__wrapper wrap-button'}>
						<button
							tupe={'submit'}
							className={'button auth-form__button'}
							disabled={submitting || !valid}
						>
							Зарегистрироваться
						</button>
					</div>

					<div className={'auth-form__wrapper wrap-redirect'}>
						<span className={'auth-form__redirect-quetion'}>
							Уже регистрировались?{' '}
						</span>
						<Link to={'/login'} className={'auth-form__redirect-link'}>
							Войти
						</Link>
					</div>
				</form>
			</div>
		</>
	)
}

const SignupForm = reduxForm({ form: 'signup', validate })(SignupReduxForm)

export default connect(
	state => ({
		state,
	}),
	{ registrationAction }
)(SignupForm)
