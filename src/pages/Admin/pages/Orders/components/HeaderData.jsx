import React, { useMemo } from 'react'
import { format } from 'date-fns'

export const HeaderData = ({
	userData: { email, name, surname, middleName },
	address: { index, city, street, house, flat },
	orderNumber,
	payType,
	track,
	paid,
	ready,
	revoke,
	created,
}) => {
	const status = useMemo(() => {
		if (revoke) {
			return <span className={'order-paid__not'}>отменён</span>
		}

		if (!!track) {
			return <span className={'order-ready'}>отправлен</span>
		}
		if (!ready) {
			return 'в обработке'
		}
		if (paid) {
			return (
				<span className={'order-paid__yes'}>оплачен, готовится к отправке</span>
			)
		}
		if (payType !== 'bankcard') {
			return <span className={'order-paid__yes'}>готовится к отправке</span>
		}
		return <span className={'order-paid__not'}>ожидает оплаты</span>
	}, [track, ready, paid, payType, revoke])

	return (
		<div className={'orders-item__header'}>
			<div className={'orders-item__top'}>
				<span className={'orders-item__number'}>Заказ № {orderNumber}</span>
				<span className={'orders-item__date'}>
					{`от ${format(created, 'DD.MM.YYYY')} `}
				</span>
				<span className={'orders-item__status'}>{status}</span>
			</div>
			<div className={'orders-item__bottom'}>
				<div>
					<span className={'orders-item__title'}>Заказчик:</span>
					<span className={'orders-item__owner'}>{`${surname} ${name}${
						middleName ? ` ${middleName}` : ''
					}`}</span>
				</div>
				<div>
					<span className={'orders-item__title'}>E-mail:</span>
					{email}
				</div>
				<div>
					<span className={'orders-item__title'}>Адрес доставки:</span>
					<span
						className={'orders-item__address'}
					>{`${index}, г.${city} ул.${street} д.${house} ${
						flat ? `кв.${flat}` : ''
					}`}</span>
				</div>
			</div>
		</div>
	)
}
