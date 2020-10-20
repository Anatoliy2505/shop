import React from 'react'
import './CustomerData.scss'

export const CustomerData = ({
	communication,
	getStatus,
	userData,
	delivery,
	address,
	payType,
	comments,
}) => {
	return (
		<section className={'customer'}>
			<h2 className={'order-item__title'}>Основные данные по заказу</h2>
			<div className={'customer-data'}>
				<div className={'customer-data__item'}>
					<span className={'customer-field__name'}>Заказчик: </span>
					{`${userData.surname} ${userData.name} ${userData.middleName}`}
				</div>
				<div className={'customer-data__item'}>
					<span className={'customer-field__name'}>Адрес доставки: </span>
					{`${address.index}, г.${address.city}, ул.${address.street} ${
						address.flat ? `${address.house}-${address.flat}` : address.house
					}`}
				</div>
				<div className={'customer-data__item'}>
					<span className={'customer-field__name'}>
						Связываться по {communication === 'email' ? 'E-mail: ' : 'тел.: '}
					</span>
					{communication === 'email' ? userData.email : userData.phone}
				</div>
				<div className={'customer-data__item'}>
					<span className={'customer-field__name'}>Доставка: </span>
					{delivery === 'postal'
						? 'Почтой России'
						: 'транспортной компанией (СДЭК)'}
				</div>
				{comments && (
					<div className={'customer-data__item'}>
						<span className={'customer-field__name'}>
							Примечание к заказу:{' '}
						</span>
						{comments}
					</div>
				)}
				<div className={'customer-data__item'}>
					<span className={'customer-field__name'}>Оплата: </span>
					{payType === 'bankcard' ? 'банковской картой' : 'наложенным платежом'}
				</div>
				<div className={'customer-data__item'}>
					<span className={'customer-field__name'}>Статус заказа: </span>
					{getStatus()}
				</div>
			</div>
		</section>
	)
}
