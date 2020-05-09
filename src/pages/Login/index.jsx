import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
	return (
		<div>
			<div className="login-page">
				<form action="post" className="login-form">
					<h1 className="login-form__title">Вход</h1>
					<div className="login-form__wrapper">
						<label htmlFor="email" className={'login-form__field-name'}>
							Адрес электронной почты
						</label>
						<input type="text" name="email" className={'login-form__field'} />
					</div>
					<div className="login-form__wrapper">
						<label htmlFor="password" className={'login-form__field-name'}>
							Пароль
						</label>
						<input
							type="password"
							name="password"
							className={'login-form__field'}
						/>
						<Link to="/forgot-password" className="login-form__forgot-password">
							Забыли пароль?
						</Link>
					</div>

					<div className="login-form__wrapper remember">
						<input
							type="checkbox"
							name="remember"
							className={'login-form__remember'}
						/>
						<label htmlFor="email" className={'login-form__remember-name'}>
							Запомнить меня
						</label>
					</div>

					<div className="login-form__wrapper wrap-button">
						<button tupe="submit" className={'button login-form__button'}>
							Войти
						</button>
					</div>

					<div className="login-form__wrapper wrap-signup">
						<span className="signup-quetion">Впервые у нас? </span>
						<Link to="/signup" className="signup-link">
							Зарегистрироваться
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
