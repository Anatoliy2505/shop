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

	if (values['parentId'] !== 0 && !values['parentId']) {
		errors['parentId'] = 'Выберите родителя'
	}

	if (!values['title']) {
		errors['title'] = 'Поле обязательно для заполнения'
	} else if (values['title'].length > 30) {
		errors['title'] = 'Длина названия более 30 символов'
	}

	if (!values['name']) {
		errors['name'] = 'Поле обязательно для заполнения'
	} else if (!/[a-zA-Z\s]/i.test(values['name'].trim())) {
		errors['name'] = 'Только английские буквы'
	}

	if (values['parentId'] === '0' && !values['image']) {
		errors['image'] = 'Добавьте код картинки'
	}

	return errors
}

export const validateChangeGroup = values => {
	const errors = {}

	if (!values['title']) {
		errors['title'] = 'Поле обязательно для заполнения'
	} else if (values['title'].length > 30) {
		errors['title'] = 'Длина названия более 30 символов'
	}

	if (!values['name']) {
		errors['name'] = 'Поле обязательно для заполнения'
	} else if (!/[a-zA-Z\s]/i.test(values['name'].trim())) {
		errors['name'] = 'Только английские буквы'
	}

	if (values['parentId'] === values['categoryId']) {
		errors['parentId'] = 'Ошибка! Выберите другого родителя'
	}

	if (values['parentId'] === '0' && !values['image']) {
		errors['image'] = 'Добавьте код картинки'
	}

	return errors
}

export const validateDeleteGroup = values => {
	const errors = {}

	if (!values['categoryId']) {
		errors['categoryId'] = 'Выбирите категорию для удаления'
	}

	return errors
}

export const validateCreateCollection = values => {
	const errors = {}

	if (!values['title']) {
		errors['title'] = 'Поле обязательно для заполнения'
	} else if (values['title'].length > 30) {
		errors['title'] = 'Длина названия более 30 символов'
	}

	if (!values['name']) {
		errors['name'] = 'Поле обязательно для заполнения'
	} else if (!/[a-zA-Z\s\d]/i.test(values['name'].trim())) {
		errors['name'] = 'Только английские буквы'
	}

	if (values['parentId'] === values['categoryId']) {
		errors['parentId'] = 'Ошибка! Выберите родителя'
	}

	if (!values['price'] || values['price'] === '0') {
		errors['price'] = 'Необходимо указать цену отличную от 0'
	} else if (!/^\d+$/i.test(values['price'])) {
		errors['price'] = 'Используйте только цифры'
	}
	if (!values['mainParameter']) {
		errors['mainParameter'] = 'Укажите отличительный параметр'
	} else if (values['mainParameter'].length > 30) {
		errors['mainParameter'] = 'Длина параметра более 30 символов'
	}

	if (!values['content']) {
		errors['content'] = 'Добавьте описание'
	} else if (values['content'].length > 1000) {
		errors['content'] = 'Длина описания более 1000 символов'
	}

	if (!values['container']) {
		errors['container'] = 'Укажите упаковку и количество в ней товара'
	} else if (values['title'].length > 100) {
		errors['container'] = 'Длина поля более 100 символов'
	}

	if (values['sort'] !== '0' && !values['sort']) {
		errors['sort'] = 'Укажите порядковый номер'
	} else if (!/^\d+$/i.test(values['sort'])) {
		errors['sort'] = 'Используйте только положительные цифры'
	}

	if (!values['image']) {
		errors['image'] = 'Добавьте картинку'
	} else if (values['image'].length === 0) {
		errors['image'] = 'Добавьте картинку'
	}

	return errors
}

export const validateChangeCollection = values => {
	const errors = {}

	if (!values['title']) {
		errors['title'] = 'Поле обязательно для заполнения'
	} else if (values['title'].length > 30) {
		errors['title'] = 'Длина названия более 30 символов'
	}

	if (!values['name']) {
		errors['name'] = 'Поле обязательно для заполнения'
	} else if (!/[a-zA-Z\s\d]/i.test(values['name'].trim())) {
		errors['name'] = 'Только английские буквы'
	}

	if (!values['parentId']) {
		errors['parentId'] = 'Ошибка! Выберите родителя'
	}

	if (!values['price'] || values['price'] === '0') {
		errors['price'] = 'Необходимо указать цену отличную от 0'
	} else if (!/^\d+$/i.test(values['price'])) {
		errors['price'] = 'Используйте только цифры'
	}

	if (!values['container']) {
		errors['container'] = 'Укажите упаковку и количество в ней товара'
	} else if (values['title'].length > 100) {
		errors['container'] = 'Длина поля более 100 символов'
	}

	if (!values['mainParameter']) {
		errors['mainParameter'] = 'Укажите отличительный параметр'
	} else if (values['mainParameter'].length > 30) {
		errors['mainParameter'] = 'Длина параметра более 30 символов'
	}

	if (!values['content']) {
		errors['content'] = 'Добавьте описание'
	} else if (values['content'].length > 1000) {
		errors['content'] = 'Длина описания более 1000 символов'
	}

	if (values['sort'] !== '0' && !values['sort']) {
		errors['sort'] = 'Укажите порядковый номер'
	} else if (!/^\d+$/i.test(values['sort'])) {
		errors['sort'] = 'Используйте только положительные цифры'
	}

	if (
		values['isNewImage'] &&
		!!values['image'] &&
		values['image'].length === 0
	) {
		errors['image'] = 'Добавьте картинку'
	}

	return errors
}

export const validateCreateProduct = values => {
	const errors = {}

	if (!values['title']) {
		errors['title'] = 'Поле обязательно для заполнения'
	} else if (values['title'].length > 30) {
		errors['title'] = 'Длина названия более 30 символов'
	}

	if (!values['name']) {
		errors['name'] = 'Поле обязательно для заполнения'
	} else if (!/[a-zA-Z\s\d]/i.test(values['name'].trim())) {
		errors['name'] = 'Только английские буквы'
	}

	if (!values['collectionId']) {
		errors['collectionId'] = 'Ошибка! Выберите родителя'
	}

	if (!values['price'] || values['price'] === '0') {
		errors['price'] = 'Необходимо указать цену отличную от 0'
	} else if (!/^\d+$/i.test(values['price'])) {
		errors['price'] = 'Используйте только положительные цифры'
	}
	if (!values['mainParameter']) {
		errors['mainParameter'] = 'Укажите отличительный параметр'
	} else if (values['mainParameter'].length > 50) {
		errors['mainParameter'] = 'Длина параметра более 50 символов'
	}

	if (values['salePrice'] !== 0 && !values['salePrice']) {
		errors['salePrice'] = 'Укажите 0 или цену со скидкой'
	} else if (!/^\d+$/i.test(values['salePrice'])) {
		errors['salePrice'] = 'Используйте только положительные цифры'
	}

	if (values['sort'] !== 0 && !values['sort']) {
		errors['sort'] = 'Укажите порядковый номер'
	} else if (!/^\d+$/i.test(values['sort'])) {
		errors['sort'] = 'Используйте только положительные цифры'
	}

	if (!values['image']) {
		errors['image'] = 'Добавьте картинку'
	} else if (values['image'].length === 0) {
		errors['image'] = 'Добавьте картинку'
	}

	return errors
}

export const validateUpdateProduct = values => {
	const errors = {}

	if (!values['title']) {
		errors['title'] = 'Поле обязательно для заполнения'
	} else if (values['title'].length > 30) {
		errors['title'] = 'Длина названия более 30 символов'
	}

	if (!values['name']) {
		errors['name'] = 'Поле обязательно для заполнения'
	} else if (!/[a-zA-Z\s\d]/i.test(values['name'].trim())) {
		errors['name'] = 'Только английские буквы'
	}

	if (!values['collectionId']) {
		errors['collectionId'] = 'Ошибка! Выберите родителя'
	}

	if (!Number(values['price'])) {
		errors['price'] = 'Необходимо указать цену отличную от 0'
	} else if (!/^\d+$/i.test(values['price'])) {
		errors['price'] = 'Используйте только положительные цифры'
	}
	if (!values['mainParameter']) {
		errors['mainParameter'] = 'Укажите отличительный параметр'
	} else if (values['mainParameter'].length > 50) {
		errors['mainParameter'] = 'Длина параметра более 50 символов'
	}

	if (!Number(values['salePrice']) && Number(values['salePrice']) !== 0) {
		errors['salePrice'] = 'Укажите 0 или цену со скидкой'
	} else if (!/^\d+$/i.test(values['salePrice'])) {
		errors['salePrice'] = 'Используйте только положительные цифры'
	}

	if (!Number(values['sort']) && Number(values['sort']) !== 0) {
		errors['sort'] = 'Укажите порядковый номер'
	} else if (!/^\d+$/i.test(values['sort'])) {
		errors['sort'] = 'Используйте только положительные цифры'
	}

	if (!values['image']) {
		errors['image'] = 'Выберите новую картинку'
	} else if (values['image'].length === 0) {
		errors['image'] = 'Выберите новую картинку'
	}

	if (!values['newGroupId']) {
		errors['newGroupId'] = 'Выберите новую родительскую группу'
	}

	if (!values['newParentId']) {
		errors['newParentId'] = 'Выберите новую родительскую коллекцию'
	}

	if (!values['productId']) {
		errors['productId'] = 'Выберите товар для изменения'
	}

	return errors
}

export const validateCreateSlide = values => {
	const errors = {}

	if (!values['title']) {
		errors['title'] = 'Введите название слайда'
	} else if (values['title'].length > 100) {
		errors['title'] = 'Длина названия более 100 символов'
	}

	if (!values['description']) {
		errors['description'] = 'Необходимо описание'
	} else if (values['description'].length > 1000) {
		errors['description'] = 'Длина названия более 1000 символов'
	}

	if (!Number(values['sort']) && Number(values['sort']) !== 0) {
		errors['sort'] = 'Укажите порядковый номер'
	} else if (!/^\d+$/i.test(values['sort'])) {
		errors['sort'] = 'Используйте только положительные цифры'
	}

	if (!values['image']) {
		errors['image'] = 'Выберите новую картинку'
	} else if (values['image'].length === 0) {
		errors['image'] = 'Выберите новую картинку'
	}

	return errors
}

export const validateUpdateSlide = values => {
	const errors = {}

	if (!values['title']) {
		errors['title'] = 'Введите название слайда'
	} else if (values['title'].length > 100) {
		errors['title'] = 'Длина названия более 100 символов'
	}

	if (!values['description']) {
		errors['description'] = 'Необходимо описание'
	} else if (values['description'].length > 1000) {
		errors['description'] = 'Длина названия более 1000 символов'
	}

	if (!Number(values['sort']) && Number(values['sort']) !== 0) {
		errors['sort'] = 'Укажите порядковый номер'
	} else if (!/^\d+$/i.test(values['sort'])) {
		errors['sort'] = 'Используйте только положительные цифры'
	}

	if (values['isNewImage'] && !values['image']) {
		errors['image'] = 'Выберите новую картинку'
	} else if (values['isNewImage'] && values['image'].length === 0) {
		errors['image'] = 'Выберите новую картинку'
	}

	return errors
}

export const validateCreateNews = values => {
	const errors = {}

	if (!values['title']) {
		errors['title'] = 'Введите название слайда'
	} else if (values['title'].length > 100) {
		errors['title'] = 'Длина названия более 100 символов'
	}

	if (!values['name']) {
		errors['name'] = 'Поле обязательно для заполнения'
	} else if (!/[a-zA-Z\s\d]/i.test(values['name'].trim())) {
		errors['name'] = 'Только английские буквы'
	}

	if (!values['litleDesc']) {
		errors['litleDesc'] = 'Необходимо краткое описание'
	} else if (values['litleDesc'].length > 500) {
		errors['litleDesc'] = 'Длина названия более 500 символов'
	}

	if (!values['description']) {
		errors['description'] = 'Необходимо описание'
	} else if (values['description'].length > 20000) {
		errors['description'] = 'Длина названия более 20000 символов'
	}

	if (!values['date']) {
		errors['date'] = 'Укажите дату'
	}

	if (!Number(values['sort']) && Number(values['sort']) !== 0) {
		errors['sort'] = 'Укажите порядковый номер'
	} else if (!/^\d+$/i.test(values['sort'])) {
		errors['sort'] = 'Используйте только положительные цифры'
	}

	if (!values['image']) {
		errors['image'] = 'Выберите картинку'
	} else if (values['image'].length === 0) {
		errors['image'] = 'Выберите картинку'
	}

	return errors
}

export const validateUpdateNews = values => {
	const errors = {}

	if (!values['title']) {
		errors['title'] = 'Введите название слайда'
	} else if (values['title'].length > 100) {
		errors['title'] = 'Длина названия более 100 символов'
	}

	if (!values['name']) {
		errors['name'] = 'Поле обязательно для заполнения'
	} else if (!/[a-zA-Z\s\d]/i.test(values['name'].trim())) {
		errors['name'] = 'Только английские буквы'
	}

	if (!values['litleDesc']) {
		errors['litleDesc'] = 'Необходимо краткое описание'
	} else if (values['litleDesc'].length > 500) {
		errors['litleDesc'] = 'Длина названия более 500 символов'
	}

	if (!values['description']) {
		errors['description'] = 'Необходимо описание'
	} else if (values['description'].length > 20000) {
		errors['description'] = 'Длина названия более 20000 символов'
	}

	if (!values['date']) {
		errors['date'] = 'Укажите дату'
	}

	if (!Number(values['sort']) && Number(values['sort']) !== 0) {
		errors['sort'] = 'Укажите порядковый номер'
	} else if (!/^\d+$/i.test(values['sort'])) {
		errors['sort'] = 'Используйте только положительные цифры'
	}

	if (values['isNewImage'] && !values['image']) {
		errors['image'] = 'Выберите новую картинку'
	} else if (values['isNewImage'] && values['image'].length === 0) {
		errors['image'] = 'Выберите новую картинку'
	}

	return errors
}

export const validateAddRecommendations = values => {
	const errors = {}

	if (!values['parentsIds'] || values['parentsIds'].length === 0) {
		errors['parentsIds'] = 'Выберите родительские категории'
	}

	if (!values['collectionsIds'] || values['collectionsIds'].length === 0) {
		errors['collectionsIds'] = 'Выберите коллекции для добавления'
	}

	return errors
}

export const validateRemoveRecommendations = values => {
	const errors = {}

	if (!values['collectionsIds'] || values['collectionsIds'].length === 0) {
		errors['collectionsIds'] = 'Выберите коллекции для удаления'
	}

	return errors
}

export const validateVideos = values => {
	const errors = {}

	if (!values['title']) {
		errors['title'] = 'Необхождимо название для видео'
	} else if (values['title'].length > 70) {
		errors['title'] = 'Длина названия более 70 символов'
	}

	if (!values['link']) {
		errors['link'] = 'Необхождимо указать ссылку на YouTube видео'
	}

	return errors
}
