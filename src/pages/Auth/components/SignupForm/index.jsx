import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import { FormItem } from '../FormItem'
import { validateSignupForm as validate } from '../../../../utils/validators'
import './SignupForm.scss'

const SignupReduxForm = ({ handleSubmit }) => {
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
					<h1 className={'auth-form__title'}>Регистрация</h1>
					<Field
						component={FormItem}
						type={'text'}
						name={'name'}
						label={'Имя *'}
					/>
					<Field
						component={FormItem}
						type={'text'}
						name={'surname'}
						label={'Фамилия'}
					/>
					<Field
						component={FormItem}
						type={'email'}
						name={'email'}
						label={'Адрес электронной почты *'}
					/>
					<Field
						component={FormItem}
						type={'password'}
						name={'password'}
						label={'Пароль *'}
					/>
					<Field
						component={FormItem}
						type={'text'}
						name={'confirmPassword'}
						label={'Подтвердите пароль *'}
					/>

					<div className={'auth-form__wrapper wrap-button'}>
						<button tupe={'submit'} className={'button auth-form__button'}>
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
		</div>
	)
}

const SignupForm = reduxForm({ form: 'signup', validate })(SignupReduxForm)

export default SignupForm
