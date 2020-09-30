import React from 'react'

export const Address = ({
	addressData: { city, street, house, flat, index },
}) => {
	return (
		<>
			<h2 className={'data-title'}>Адрес доставки</h2>
			<div className={'data-item'}>
				<span className={'data-item__name'}>Город:</span>
				<span className={'data-item__value'}>{city ? city : '-----'}</span>
			</div>
			<div className={'data-item'}>
				<span className={'data-item__name'}>Улица:</span>
				<span className={'data-item__value'}>{street ? street : '-----'}</span>
			</div>
			<div className={'data-item'}>
				<span className={'data-item__name'}>Дом:</span>
				<span className={'data-item__value'}>{house ? house : '-----'}</span>
			</div>
			<div className={'data-item'}>
				<span className={'data-item__name'}>Квартира:</span>
				<span className={'data-item__value'}>{flat ? flat : '-----'}</span>
			</div>
			<div className={'data-item'}>
				<span className={'data-item__name'}>Индекс:</span>
				<span className={'data-item__value'}>{index ? index : '-----'}</span>
			</div>
		</>
	)
}
