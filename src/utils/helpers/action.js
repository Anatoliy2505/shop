import { getAllMainCategories } from '../../redux/actions'
import { logoutSimpleAction } from '../../pages/Auth/redux/actions'

export const action = (
	data,
	setToast,
	actionType,
	reset = () => {}
) => dispatch => {
	setToast({
		data: {
			message: 'Подождите, данные отправляются',
		},
		duration: 1000,
	})
	return actionType(data)
		.then(res => {
			if (!res.ok) {
				if (res.auth === false) {
					dispatch(logoutSimpleAction())
				}
				return setToast({
					data: { type: 'error', title: 'Ошибка!', message: res.message },
				})
			}

			dispatch(getAllMainCategories())
			setToast({
				data: {
					type: 'success',
					title: 'Отлично!',
					message: res.message,
				},
			})

			reset()
		})
		.catch(() => {
			setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message: 'Что-то пошло не так. Не удалось отправить данные на сервер',
				},
			})
		})
}
