import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { Context } from '../../../../context'

import { isLoadingSelector } from '../../redux/selectors'
import { loginAction } from '../../redux/actions'

import { validateLoginForm as validate } from '../../../../utils/validators'

import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import { FormItem } from '../FormItem'
import './LoginForm.scss'

const LoginReduxForm = ({
	isLoading,
	loginAction,
	handleSubmit,
	submitting,
	valid,
}) => {
	const { setToast } = useContext(Context)
	const submitForm = body => {
		loginAction(body, setToast)
	}
	return (
		<div>
			<div className={'auth-page'}>
				<form
					onSubmit={handleSubmit(submitForm)}
					action={'post'}
					className={'auth-form'}
				>
					<h1 className={'auth-form__title'}>Вход</h1>
					<Field
						component={FormItem}
						type={'email'}
						name={'email'}
						label={'Адрес электронной почты'}
						placeholder={'Введите email'}
					/>
					<Field
						component={FormItem}
						type={'password'}
						name={'password'}
						label={'Пароль'}
						placeholder={'Введите пароль'}
					>
						<Link
							to={'/forgot-password'}
							className={'auth-form__forgot-password'}
						>
							Забыли пароль?
						</Link>
					</Field>

					<div className={'auth-form__wrapper remember'}>
						<Field
							component={'input'}
							type={'checkbox'}
							name={'remember'}
							className={'auth-form__remember'}
						/>
						<label htmlFor={'remember'} className={'auth-form__remember-name'}>
							Запомнить меня
						</label>
					</div>

					<div className={'auth-form__wrapper wrap-button'}>
						<button
							tupe={'submit'}
							className={'button auth-form__button'}
							disabled={submitting || !valid || isLoading}
						>
							Войти
						</button>
					</div>

					<div className={'auth-form__wrapper wrap-redirect'}>
						<span className={'auth-form__redirect-quetion'}>
							Впервые у нас?{' '}
						</span>
						<Link to={'/registration'} className={'auth-form__redirect-link'}>
							Зарегистрироваться
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

const LoginForm = reduxForm({ form: 'login', validate })(LoginReduxForm)

export default connect(
	state => ({
		isLoading: isLoadingSelector(state),
	}),
	{ loginAction }
)(LoginForm)
