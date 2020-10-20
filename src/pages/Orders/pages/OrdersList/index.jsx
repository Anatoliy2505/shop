import React, { useEffect, useCallback, useRef } from 'react'
import { connect } from 'react-redux'
import { BreadCrumbs, Empty, Error, Preloader } from '../../../../components'
import { OrdersListItem } from './components'
import { getOrders } from './redux/actions'
import { ordersSelector } from './redux/selectors'
import { useSetToast } from '../../../../hooks/useSetToast'
import './OrdersList.scss'

const OrdersList = ({ orders: { isLoading, data, errorMsg }, getOrders }) => {
	const isMounted = useRef(false)
	const { setToast } = useSetToast()

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true
			getOrders(setToast)
		}
	}, [isMounted, getOrders, setToast])

	const getOrdersList = useCallback(() => {
		return data.map(item => <OrdersListItem key={item._id} orderData={item} />)
	}, [data])

	return (
		<>
			<BreadCrumbs lastElementName={'Ваши заказы'} />
			<h1 className="page-title">Ваши заказы</h1>
			{isLoading ? (
				<Preloader title={'Загрузка заказов'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : data && data.length > 0 ? (
				<table className={'orders'}>
					<thead>
						<tr>
							<th className={'column-name date'}>Дата</th>
							<th className={'column-name number'}>№ Заказа</th>
							<th className={'column-name status'}>Статус</th>
							<th className={'column-name products'}>Товары</th>
							<th className={'column-name delivery'}>Доставка</th>
							<th className={'column-name pay'}>Оплата</th>
						</tr>
					</thead>
					<tbody>{getOrdersList()}</tbody>
				</table>
			) : (
				<Empty title={'Пока у Вас нет заказов'} />
			)}
		</>
	)
}

export default connect(state => ({ orders: ordersSelector(state) }), {
	getOrders,
})(OrdersList)
