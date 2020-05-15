import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userSelector } from '../../pages/Auth/redux/selectors'

import './UserPanel.scss'

const UserPanel = ({ user: { role, name, surname } }) => {
	return (
		<div className="user-panel">
			<div className="container">
				<span className="user-name">
					{role === 'admin'
						? 'Администратор'
						: surname
						? `${surname} ${name}`
						: name}
				</span>
				<div className="user-routes">
					{role === 'admin' ? (
						<Link to={'/admin'} className={'user-routes__item'}>
							Панель администратора
						</Link>
					) : (
						<>
							<Link to={'/user'} className={'user-routes__item'}>
								Профиль
							</Link>
							<Link to={'/orders'} className={'user-routes__item'}>
								Заказы
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default connect(state => ({
	user: userSelector(state),
}))(UserPanel)
