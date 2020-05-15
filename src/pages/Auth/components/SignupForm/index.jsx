import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { Context } from '../../../../context'

import { isLoadingSelector } from '../../redux/selectors'
import { registrationAction } from '../../redux/actions'

import { Link } from 'react-router-dom'
import { FormItem } from '../FormItem'
import { validateSignupForm as validate } from '../../../../utils/validators'

import { reduxForm, Field } from 'redux-form'
import './SignupForm.scss'

const SignupReduxForm = ({
	isLoading,
	handleSubmit,
	submitting,
	valid,
	registrationAction,
}) => {
	const { setToast } = useContext(Context)

	const submitForm = body => {
		registrationAction(body, setToast)
	}

	return (
		<>
			<div className={'auth-page'}>
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
							disabled={submitting || !valid || isLoading}
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
		isLoading: isLoadingSelector(state),
	}),
	{ registrationAction }
)(SignupForm)
