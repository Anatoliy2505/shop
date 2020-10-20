import React, { useState } from 'react'
import { HeaderData } from './HeaderData'
import { OtherInfo } from './OtherInfo'
import { OrderManager } from './OrderManager'
import { useSetToast } from '../../../../../hooks'
import { useEffect } from 'react'
import { Products } from './Products'

export const Order = ({
	_id,
	userData: { email, name, surname, middleName, phone },
	address: { index, city, street, house, flat },
	changeOrderStatus,
	communication,
	orderNumber,
	getNewData,
	delivery,
	products,
	comments,
	created,
	payType,
	revoke,
	track,
	paid,
	ready,
}) => {
	const [isActive, setIsActive] = useState(false)
	const [isBlockedButtons, setIsBlockedButtons] = useState(false)

	const { setToast } = useSetToast()

	useEffect(() => {
		return () => {
			setIsActive(false)
			setIsBlockedButtons(false)
		}
	}, [setIsActive, setIsBlockedButtons])

	const changeStatus = ({ fieldName, fieldValue }) => {
		const data = {
			fieldName,
			fieldValue,
			orderId: _id,
		}
		changeOrderStatus(data, setToast, getNewData, setIsBlockedButtons)
	}
	return (
		<div className={'orders-item__data'}>
			<HeaderData
				userData={{ email, name, surname, middleName }}
				address={{ index, city, street, house, flat }}
				orderNumber={orderNumber}
				payType={payType}
				track={track}
				paid={paid}
				ready={ready}
				revoke={revoke}
				created={created}
			/>
			{isActive && (
				<div className={'orders-item__body'}>
					<OtherInfo
						email={email}
						phone={phone}
						comments={comments}
						communication={communication}
						payType={payType}
						delivery={delivery}
					/>
					<OrderManager
						track={track}
						paid={paid}
						ready={ready}
						revoke={revoke}
						payType={payType}
						changeStatus={changeStatus}
						isBlockedButtons={isBlockedButtons}
						setIsBlockedButtons={setIsBlockedButtons}
					/>
					<Products products={products} />
				</div>
			)}
			<button
				className={'button slider'}
				onClick={() => setIsActive(prev => !prev)}
			>
				{isActive ? 'Скрыть' : 'Подробнее'}
			</button>
		</div>
	)
}
