import React, { useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem } from '../../../components/FormItem'
import { validateChangeAvatar as validate } from '../../../utils/validators/userValidators'

import { useSetToast } from '../../../hooks/useSetToast'

export const ChangeAvatarForm = ({
	close,
	action,
	avatar,
	name,
	handleSubmit,
	submitting,
	valid,
	initialize,
	change,
	untouch,
}) => {
	const { setToast } = useSetToast()

	useEffect(() => {
		if (avatar) {
			initialize({
				oldImage: avatar,
			})
		}
	}, [avatar, initialize])

	const reset = () => {
		change('image', '')
		untouch('image')
		close()
	}

	const onSubmit = values => {
		const { image, ...rest } = values
		action({ image: image[0], ...rest }, setToast, reset)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={'form-title'}>Поменять аватар</h2>
			<Field component={'input'} type={'hidden'} name={'oldImage'} />
			<div className={'preview-image'}>
				<img
					src={
						process.env.PUBLIC_URL +
						(avatar ? avatar : '/images/avatars/incognito.jpg')
					}
					title={name}
					alt={'аватар'}
				/>
			</div>
			<Field
				component={FormItem}
				type={'file'}
				name={'image'}
				label={'Выбрать картинку'}
			/>
			<button
				type={'submit'}
				className={'button'}
				disabled={submitting || !valid}
			>
				Заменить
			</button>
		</form>
	)
}

export const ChangeAvatar = reduxForm({ form: 'changeAvatar', validate })(
	ChangeAvatarForm
)
