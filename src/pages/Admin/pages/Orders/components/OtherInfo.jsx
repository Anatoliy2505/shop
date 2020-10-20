import React from 'react'

export const OtherInfo = ({
	email,
	phone,
	comments,
	communication,
	payType,
	delivery,
}) => {
	return (
		<div className={'orders-other_info'}>
			<div>
				<span className={'orders-item__title'}>Доставить:</span>
				{delivery === 'postal'
					? 'Почтой России'
					: 'транспортной компанией (СДЭК)'}
			</div>
			<div>
				<span className={'orders-item__title'}>Способ оплаты:</span>
				{payType === 'bankcard' ? 'банковской картой' : 'наложенный платёж'}
			</div>
			<div>
				<span className={'orders-item__title'}>
					Связываться по {communication === 'phone' ? 'тел.' : 'email'}:
				</span>
				{communication === 'phone' ? phone : email}
			</div>
			{!!comments ? (
				<div>
					<span className={'orders-item__title'}>Коментарий к заказу:</span>"
					{comments}"
				</div>
			) : null}
		</div>
	)
}
