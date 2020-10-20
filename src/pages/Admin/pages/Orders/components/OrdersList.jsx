import React, { useCallback } from 'react'
import { Order } from './Order'

export const OrdersList = ({ orders, changeOrderStatus, getNewData }) => {
	const getOrdersData = useCallback(() => {
		if (orders && orders.length > 0) {
			return orders.map(item => (
				<Order
					key={item._id}
					{...item}
					changeOrderStatus={changeOrderStatus}
					getNewData={getNewData}
				/>
			))
		}
		return null
	}, [orders, changeOrderStatus, getNewData])
	return <div className={'orders-found'}>{getOrdersData()}</div>
}
