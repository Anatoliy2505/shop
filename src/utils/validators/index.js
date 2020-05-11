export const validateSignupForm = values => {
	const errors = {}

	if (!values.name) {
		errors.name = 'Поле обязательно для заполнения'
	} else if (values.username.length > 15) {
		errors.name = 'Не более 15 символов!'
	}

	if (values.surname && values.surname.length > 20) {
		errors.surname = 'Не более 20 символов!'
	}

	if (!values.email) {
		errors.email = 'Поле обязательно для заполнения'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Некорректный E-mail'
	}

	if (!values.password) {
		errors.password = 'Поле обязательно для заполнения'
	} else if (values.password < 6) {
		errors.password = 'Длинна пароля меньше 6 символов'
	} else if (values.password > 10) {
		errors.age = 'Длинна пароля более 10 символов'
	}

	if (!values.confirmPassword) {
		errors.confirmPassword = 'Поле обязательно для заполнения'
	} else if (values.password !== values.confirmPassword) {
		errors.confirmPassword = 'Пароли не совпадают'
	}

	return errors
}
