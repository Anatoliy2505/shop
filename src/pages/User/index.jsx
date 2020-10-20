import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Empty, Error, Preloader } from '../../components'
import { useSetToast } from '../../hooks'
import {
	UserData,
	Address,
	Avatar,
	ChangeAvatar,
	ChangeAddress,
	ChangeUser,
} from './components'
import {
	getUserData,
	changeAvatar,
	changeAddress,
	changeUserData,
} from './redux/actions'
import { userDataSelector } from './redux/selectors'

import './User.scss'

const User = ({
	data: { user, address, errorMsg, isLoading },
	getUserData,
	changeAvatar,
	changeAddress,
	changeUserData,
}) => {
	const [openFormName, setOpenFormName] = useState('')
	const { setToast } = useSetToast()

	useEffect(() => {
		if (!user) {
			getUserData(setToast)
		}
	}, [setToast, user, getUserData])

	const closeForm = () => {
		setOpenFormName('')
	}

	const openForm = formName => {
		setOpenFormName(formName)
	}

	const getComponent = ({
		formName,
		component: Component,
		form: Form,
		action,
		...rest
	}) => {
		return openFormName === formName ? (
			<>
				<span
					className={'close-button action-button'}
					onClick={closeForm}
					title={'Закрыть'}
				>
					<i className={'far fa-times-circle'} />
				</span>
				<Form close={closeForm} action={action} {...rest} />
			</>
		) : (
			<>
				<span
					className={'edit-button action-button'}
					onClick={() => openForm(formName)}
					title={'Изменить'}
				>
					<i className={'far fa-edit'} />
				</span>
				<Component {...rest} />
			</>
		)
	}

	return (
		<section className={'user-page'}>
			<h1 className={'page-title'}>Личный кабинет</h1>
			{isLoading ? (
				<Preloader title={'Загружаем данные пользователя'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : user && address ? (
				<div className={'person'}>
					<div className={'person-img'}>
						{getComponent({
							formName: 'avatar',
							component: Avatar,
							form: ChangeAvatar,
							action: changeAvatar,
							avatar: user.avatar,
							name: user.name,
						})}
					</div>

					<div className={'person-data'}>
						<div className={'data'}>
							{getComponent({
								formName: 'user',
								component: UserData,
								form: ChangeUser,
								action: changeUserData,
								userData: user,
							})}
						</div>

						<div className={'data'}>
							{getComponent({
								formName: 'address',
								component: Address,
								form: ChangeAddress,
								action: changeAddress,
								addressData: address,
							})}
						</div>
					</div>
				</div>
			) : (
				<Empty title={'Данные пользователя не получены'} />
			)}
		</section>
	)
}

export default connect(
	state => ({
		data: userDataSelector(state),
	}),
	{ getUserData, changeAvatar, changeAddress, changeUserData }
)(User)
