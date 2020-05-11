import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import { FormItem } from '../FormItem'
import './LoginForm.scss'

const LoginReduxForm = ({ handleSubmit }) => {
	const submitForm = values => {
		console.log(values)
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
					/>
					<Field
						component={FormItem}
						type={'password'}
						name={'password'}
						label={'Пароль'}
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
						<button tupe={'submit'} className={'button auth-form__button'}>
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

const LoginForm = reduxForm({ form: 'login' })(LoginReduxForm)

export default LoginForm
