import { logoutSimpleAction } from '../../pages/Auth/redux/actions'
import { getUserData } from '../../pages/User/redux/actions'

export const actionForUser = (
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

			dispatch(getUserData())
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
