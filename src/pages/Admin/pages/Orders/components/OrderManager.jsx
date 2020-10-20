import React, { useState } from 'react'

export const OrderManager = ({
	isBlockedButtons,
	setIsBlockedButtons,
	payType,
	track,
	paid,
	ready,
	revoke,
	changeStatus,
}) => {
	const [trackNumber, setTrackNumber] = useState(track)
	const onChangeTrack = event => {
		const track = event.currentTarget.value
		setTrackNumber(track)
	}

	const onSend = (fieldName, fieldValue) => {
		setIsBlockedButtons(true)
		changeStatus({ fieldName, fieldValue })
	}

	return (
		<div className={'orders-item__manager'}>
			<h2 className={'orders-manager__title'}>
				Поменять статусы на: (нажмите на нужный)
			</h2>
			<div>
				<button
					className={'button'}
					onClick={onSend.bind(null, 'ready', !ready)}
					disabled={isBlockedButtons}
				>
					{ready ? 'В обработке' : 'Собран'}
				</button>
				{payType === 'bankcard' && (
					<button
						className={'button'}
						onClick={onSend.bind(null, 'paid', !paid)}
						disabled={isBlockedButtons}
					>
						{paid ? 'Не оплачен' : 'Оплачен'}
					</button>
				)}

				<button
					className={'button'}
					onClick={onSend.bind(null, 'revoke', !revoke)}
					disabled={isBlockedButtons}
				>
					{revoke ? 'Активный' : 'Отменён'}
				</button>
			</div>
			<h2 className={'orders-manager__title'}>Добавить трек номер</h2>
			<div>
				<input type={'text'} value={trackNumber} onChange={onChangeTrack} />
				<button
					className={'button'}
					onClick={onSend.bind(null, 'track', trackNumber)}
					disabled={isBlockedButtons}
				>
					Добавить
				</button>
			</div>
		</div>
	)
}
