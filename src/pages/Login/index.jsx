import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
	return (
		<div>
			<div className="auth-page">
				<form action="post" className="auth-form">
					<h1 className="auth-form__title">Вход</h1>
					<div className="auth-form__wrapper">
						<label htmlFor="email" className={'auth-form__field-name'}>
							Адрес электронной почты
						</label>
						<input type="text" name="email" className={'auth-form__field'} />
					</div>
					<div className="auth-form__wrapper">
						<label htmlFor="password" className={'auth-form__field-name'}>
							Пароль
						</label>
						<input
							type="password"
							name="password"
							className={'auth-form__field'}
						/>
						<Link to="/forgot-password" className="auth-form__forgot-password">
							Забыли пароль?
						</Link>
					</div>

					<div className="auth-form__wrapper remember">
						<input
							type="checkbox"
							name="remember"
							className={'auth-form__remember'}
						/>
						<label htmlFor="email" className={'auth-form__remember-name'}>
							Запомнить меня
						</label>
					</div>

					<div className="auth-form__wrapper wrap-button">
						<button tupe="submit" className={'button auth-form__button'}>
							Войти
						</button>
					</div>

					<div className="auth-form__wrapper wrap-redirect">
						<span className="auth-form__redirect-quetion">Впервые у нас? </span>
						<Link to="/signup" className="auth-form__redirect-link">
							Зарегистрироваться
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
