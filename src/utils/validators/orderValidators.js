export const validateUserstage = values => {
	const errors = {}

	if (!values.email) {
		errors.email = 'Поле обязательно для заполнения'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Некорректный E-mail'
	}

	if (!values['surname']) {
		errors['surname'] = 'Укажите фамилию'
	} else if (values['surname'].length > 30) {
		errors['surname'] = 'Длина фамилии более 30 символов'
	}

	if (!values['name']) {
		errors['name'] = 'Укажите имя'
	} else if (values['name'].length > 30) {
		errors['name'] = 'Длина имени более 30 символов'
	}

	if (!!values['middleName'] && values['middleName'].length > 30) {
		errors['middleName'] = 'Длина отчества более 30 символов'
	}

	if (!values['phone']) {
		errors['phone'] = 'Укажите телефон'
	} else if (
		!/^(\+7|\+1|8){1}([(]?[0-9]{3}[)]?)[\s-]?[0-9]{3}[\s-]?[0-9]{2}([\s-]?[0-9]{2,4})?$/im.test(
			values['phone'].trim()
		)
	) {
		errors['phone'] = 'Некорректный номер телефона'
	}

	return errors
}

export const validateAddressStage = values => {
	const errors = {}

	if (!values['city']) {
		errors['city'] = 'Укажите город'
	} else if (values['city'].length > 50) {
		errors['city'] = 'Название города фамилии длиннее 50 символов'
	}

	if (!values['street']) {
		errors['street'] = 'Укажите улицу'
	} else if (values['street'].length > 50) {
		errors['street'] = 'Название улицы длиннее 50 символов'
	}

	if (!values['house']) {
		errors['house'] = 'Укажите номер дома'
	}

	if (!values['index']) {
		errors['index'] = 'Укажите индекс'
	}

	return errors
}

export const validateDeliveryStage = values => {
	const errors = {}

	if (!values['delivery']) {
		errors['delivery'] = 'Укажите способ доставки'
	}

	if (!values['communication']) {
		errors['communication'] = 'Укажите способ связи'
	}

	if (!values['payType']) {
		errors['payType'] = 'Укажите способ оплаты'
	}

	return errors
}
