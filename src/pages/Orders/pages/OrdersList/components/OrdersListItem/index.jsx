import React from 'react'
import { format } from 'date-fns'
import { NavLink } from 'react-router-dom'

import './OrdersListItem.scss'

export const OrdersListItem = ({
	orderData: {
		orderNumber,
		products,
		delivery,
		created,
		payType,
		ready,
		track,
		paid,
		revoke,
	},
}) => {
	const getStatus = () => {
		if (revoke) {
			return <span className={'order-paid__no'}>Отменён</span>
		}
		if (!!track) {
			return <span className={'order-paid__ready'}>Отправлен</span>
		}
		if (!ready) {
			return 'В обработке'
		}
		if (paid) {
			return (
				<>
					<div className={'order-paid__yes'}>Оплачен</div>
					<div className={'order-paid__yes'}>готовится</div>
					<div className={'order-paid__yes'}>к отправке</div>
				</>
			)
		}
		if (payType !== 'bankcard') {
			return (
				<>
					<div className={'order-paid__yes'}>Готовится</div>
					<div className={'order-paid__yes'}>к отправке</div>
				</>
			)
		}
		return (
			<>
				<div className={'order-paid__no'}>Ожидает</div>
				<div className={'order-paid__no'}>оплаты</div>
			</>
		)
	}

	return (
		<tr className={'order'}>
			<td className={'order-date'}>{format(created, 'DD.MM.YYYY')}</td>
			<td className={'order-number'}>
				<NavLink to={`/orders/${orderNumber}`}>Заказ № {orderNumber}</NavLink>
			</td>
			<td className={'order-paid'}>{getStatus()}</td>
			<td className={'order-products'}>
				{products.map(product => (
					<div key={product._id} className={'order-products__item'}>
						{product.title} × {product.count}
					</div>
				))}
			</td>
			<td className={'order-delivery'}>
				{delivery === 'postal' ? (
					<>
						<div>Почтой</div>
						<div>России</div>
					</>
				) : (
					<>
						<div>Транспортной</div>
						<div>компанией</div>
						<div>(СДЭК)</div>
					</>
				)}
			</td>
			<td className={'order-pay'}>
				{payType === 'bankcard' ? (
					<>
						<div>Банковской</div>
						<div>картой</div>
					</>
				) : (
					<>
						<div>Наложенным</div>
						<div>платежом</div>
					</>
				)}
			</td>
		</tr>
	)
}
