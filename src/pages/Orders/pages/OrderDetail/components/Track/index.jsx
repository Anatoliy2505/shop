import React, { useMemo, useState, useCallback } from 'react'
import { format } from 'date-fns'

import './Track.scss'

export const Track = ({ trackData, track, delivery }) => {
	const [isVisible, setIsVisible] = useState(false)

	const currentTrackStatus = useMemo(() => {
		if (!!trackData) {
			const {
				operation: { operType, operDate },
				address: { operationAddress },
			} = trackData[trackData.length - 1]
			return (
				<div className={'status'}>
					<span className={'status__name'}>Текущий статус: </span>
					<span className={'status__operation'}>
						{`${operType.name.toLowerCase()} ${format(
							operDate,
							'DD.MM.YYYY hh:mm'
						)}`}
					</span>
					{`, место ${operationAddress.index} ${operationAddress.description}`}
				</div>
			)
		} else {
			return null
		}
	}, [trackData])

	const getTracDataItems = useCallback(() => {
		if (!!trackData) {
			return (
				<>
					{trackData.map((item, index) => {
						const {
							operation: { operType, operDate },
							address: { operationAddress },
						} = item
						return (
							<div key={index} className={'track-info__item'}>
								<div className={'track-info__border'}></div>
								<div className={'track-info__status'}>
									{`${format(
										operDate,
										'DD.MM.YYYY hh:mm'
									)} ${operType.name.toLowerCase()}, `}
									{`${operationAddress.index} ${operationAddress.description}`}
								</div>
							</div>
						)
					})}
				</>
			)
		} else {
			return null
		}
	}, [trackData])

	return (
		<section className={'track'}>
			<h2 className={'order-item__title'}>Информация о передвижении товара</h2>
			<div className={'track-wrap__number'}>
				Номер отправления: <span className={'track-number'}>{track}</span>
			</div>

			{delivery === 'postal' ? (
				<>
					{currentTrackStatus}
					{trackData ? (
						<>
							<div className={`track-info${isVisible ? ' visible' : ''}`}>
								<h2 className={'order-item__title'}>
									Вся история передвижения товара
								</h2>
								{getTracDataItems()}
							</div>

							<button
								className={'button'}
								onClick={() => setIsVisible(prev => !prev)}
							>
								{isVisible ? 'Свернуть' : 'Показать всю историю'}
							</button>
						</>
					) : null}
				</>
			) : null}
		</section>
	)
}
