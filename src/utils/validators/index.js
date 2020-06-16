export const validateSignupForm = values => {
	const errors = {}

	if (!values.name) {
		errors.name = 'Поле обязательно для заполнения'
	} else if (values.name.length > 15) {
		errors.name = 'Длина имени более 15 символов!'
	}

	if (values.surname && values.surname.length > 15) {
		errors.surname = 'Длина фамилии более 15 символов!'
	}

	if (!values.email) {
		errors.email = 'Поле обязательно для заполнения'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Некорректный E-mail'
	}

	if (!values.password) {
		errors.password = 'Поле обязательно для заполнения'
	} else if (values.password.length < 6) {
		errors.password = 'Длина пароля менee 6 символов'
	} else if (values.password.length > 10) {
		errors.password = 'Длина пароля более 10 символов'
	}

	if (!values.confirmPassword) {
		errors.confirmPassword = 'Поле обязательно для заполнения'
	} else if (values.password && values.password !== values.confirmPassword) {
		errors.confirmPassword = 'Пароли не совпадают'
	}

	return errors
}

export const validateLoginForm = values => {
	const errors = {}

	if (!values.email) {
		errors.email = 'Поле обязательно для заполнения'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Некорректный E-mail'
	}

	if (!values.password) {
		errors.password = 'Поле обязательно для заполнения'
	} else if (values.password.length < 6) {
		errors.password = 'Длина пароля менee 6 символов'
	} else if (values.password.length > 10) {
		errors.password = 'Длина пароля более 10 символов'
	}

	return errors
}

export const validateCreateGroup = values => {
	const errors = {}

	if (values['select-parent'] !== 0 && !values['select-parent']) {
		errors['select-parent'] = 'Выберите родителя'
	}

	if (!values['category-title']) {
		errors['category-title'] = 'Поле обязательно для заполнения'
	} else if (values['category-title'].length > 30) {
		errors['category-title'] = 'Длина названия более 30 символов'
	}

	if (!values['category-name']) {
		errors['category-name'] = 'Поле обязательно для заполнения'
	} else if (!/[a-zA-Z\s]/i.test(values['category-name'].trim())) {
		errors['category-name'] = 'Только английские буквы'
	}

	if (values['select-parent'] === '0' && !values['category-image']) {
		errors['category-image'] = 'Добавьте код картинки'
	}

	return errors
}

export const validateChangeGroup = values => {
	const errors = {}

	if (!values['category-title']) {
		errors['category-title'] = 'Поле обязательно для заполнения'
	} else if (values['category-title'].length > 30) {
		errors['category-title'] = 'Длина названия более 30 символов'
	}

	if (!values['category-name']) {
		errors['category-name'] = 'Поле обязательно для заполнения'
	} else if (!/[a-zA-Z\s]/i.test(values['category-name'].trim())) {
		errors['category-name'] = 'Только английские буквы'
	}

	return errors
}
