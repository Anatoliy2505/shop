import React, { useCallback, useEffect, useRef } from 'react'
import { useParams } from 'react-router'
import { format } from 'date-fns'
import { Empty, Error, Preloader, BreadCrumbs } from '../../../../components'
import { connect } from 'react-redux'
import { getOrder } from './redux/actions'
import { setProductsFromOrder } from '../../../Cart/redux/actions'
import { orderSelector } from './redux/selectors'
import { useSetToast } from '../../../../hooks/useSetToast'
import { CustomerData, OrderedProducts, Track } from './components'

import './OrderDetail.scss'

const OrderDetail = ({
	order: { data, isLoading, errorMsg },
	getOrder,
	setProductsFromOrder,
}) => {
	const isMounted = useRef(false)
	const { orderId } = useParams()
	const { setToast } = useSetToast()

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true
			getOrder(orderId, setToast)
		}
	}, [data, getOrder, orderId, setToast, isMounted])

	const getStatus = useCallback(() => {
		const { track, ready, paid, payType, revoke } = data
		const pay = () => {}

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
		return (
			<>
				<span className={'order-paid__not'}>ожидает оплаты</span>
				<br />
				<button className={'button'} onClick={pay}>
					Оплатить
				</button>
			</>
		)
	}, [data])

	const getTitle = useCallback(
		(isMainTitle = false) => {
			if (isLoading) {
				return 'Поиск заказа'
			}
			if (!data) {
				return 'Заказ не найден'
			}
			if (isMainTitle) {
				return `Заказ № ${data.orderNumber} от ${format(
					data.created,
					'DD.MM.YYYY'
				)}г.`
			}
			return `Заказ № ${data.orderNumber}`
		},
		[data, isLoading]
	)

	return (
		<div className={'order-detail'}>
			<BreadCrumbs
				routes={[{ path: `/orders`, title: 'Все заказы' }]}
				lastElementName={getTitle()}
			/>
			<h1 className={'page-title'}>{getTitle(true)}</h1>
			{isLoading ? (
				<Preloader title={'Загрузка данных'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : data ? (
				<>
					<CustomerData
						communication={data.communication}
						orderNumber={data.orderNumber}
						userData={data.userData}
						delivery={data.delivery}
						comments={data.comments}
						address={data.address}
						payType={data.payType}
						created={data.created}
						getStatus={getStatus}
					/>
					{data.track && (
						<Track
							trackData={data.trackData ? JSON.parse(data.trackData) : null}
							track={data.track}
							delivery={data.delivery}
						/>
					)}
					<OrderedProducts
						products={data.products}
						repeatOrder={setProductsFromOrder}
					/>
				</>
			) : (
				<Empty title={'Заказ не найден'} />
			)}
		</div>
	)
}

export default connect(state => ({ order: orderSelector(state) }), {
	getOrder,
	setProductsFromOrder,
})(OrderDetail)
