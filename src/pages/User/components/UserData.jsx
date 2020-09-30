import React from 'react'

export const UserData = ({
	userData: { surname, name, middleName, email, phone },
}) => {
	return (
		<>
			<h2 className={'data-title'}>Ваши контактные данные</h2>
			<div className={'data-item'}>
				<span className={'data-item__name'}>Фамилия:</span>
				<span className={'data-item__value'}>
					{surname ? surname : '-----'}
				</span>
			</div>
			<div className={'data-item'}>
				<span className={'data-item__name'}>Имя:</span>
				<span className={'data-item__value'}>{name}</span>
			</div>
			<div className={'data-item'}>
				<span className={'data-item__name'}>Отчество:</span>
				<span className={'data-item__value'}>
					{middleName ? middleName : '-----'}
				</span>
			</div>
			<div className={'data-item'}>
				<span className={'data-item__name'}>E-mail:</span>
				<span className={'data-item__value'}>{email}</span>
			</div>
			<div className={'data-item'}>
				<span className={'data-item__name'}>Телефон:</span>
				<span className={'data-item__value'}>{phone ? phone : '-----'}</span>
			</div>
		</>
	)
}
