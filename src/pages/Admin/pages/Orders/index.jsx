import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import {
	getOrdersByNumberAction,
	getOrdersByEmailAction,
	getOrdersBySurnameAction,
	getOrdersByNotRegUsersAction,
	changeOrderStatusAction,
	deleteProductFromOrdersAction,
	deleteOrderAction,
} from './redux/actions'

import { getOrdersDataSelector } from './redux/selectors'
import { useSetToast } from '../../../../hooks'
import { Preloader, Error, Empty } from '../../../../components'
import { OrdersList } from './components/OrdersList'

import './Orders.scss'

const Orders = ({
	data: { orders, isLoading, errorMsg },
	getOrdersByNumberAction,
	getOrdersByEmailAction,
	getOrdersBySurnameAction,
	getOrdersByNotRegUsersAction,
	changeOrderStatusAction,
	deleteProductFromOrdersAction,
	deleteOrderAction,
}) => {
	const [state, setState] = useState({
		number: '',
		email: '',
		surname: '',
	})
	const [action, setAction] = useState(null)
	const lastRequest = useRef('')
	const lastAction = useRef(null)
	const { setToast } = useSetToast()

	useEffect(() => {
		setAction(null)
		if (action) {
			switch (action) {
				case 'getByNumber': {
					if (!!state.number) {
						getOrdersByNumberAction(state.number, setToast)
						lastAction.current = getOrdersByNumberAction
						lastRequest.current = state.number
						setState(prevState => ({
							...prevState,
							number: '',
						}))
						break
					}
					setToast({
						data: {
							type: 'error',
							title: 'Ошибка!',
							message: 'Укажите номер заказа',
						},
					})
					break
				}
				case 'getByEmail': {
					if (!!state.email) {
						getOrdersByEmailAction(state.email, setToast)
						lastAction.current = getOrdersByEmailAction
						lastRequest.current = state.email
						setState(prevState => ({
							...prevState,
							email: '',
						}))
						break
					}
					setToast({
						data: {
							type: 'error',
							title: 'Ошибка!',
							message: 'Укажите E-mail для поиска',
						},
					})
					break
				}
				case 'getBySurname': {
					if (!!state.surname) {
						getOrdersBySurnameAction(state.surname, setToast)
						lastAction.current = getOrdersBySurnameAction
						lastRequest.current = state.surname
						setState(prevState => ({
							...prevState,
							surname: '',
						}))
						break
					}
					setToast({
						data: {
							type: 'error',
							title: 'Ошибка!',
							message: 'Укажите фамилию для поиска',
						},
					})
					break
				}
				case 'getByNotRegUser': {
					getOrdersByNotRegUsersAction(setToast)
					lastAction.current = getOrdersByNotRegUsersAction
					lastRequest.current = ''
					break
				}
				default:
					return null
			}
		}
	}, [
		action,
		state,
		lastAction,
		lastRequest,
		setToast,
		getOrdersByNumberAction,
		getOrdersByEmailAction,
		getOrdersBySurnameAction,
		getOrdersByNotRegUsersAction,
	])

	const getNewData = () => {
		if (lastRequest.current !== '') {
			lastAction.current(lastRequest.current, setToast)
			return false
		}
		lastAction.current(setToast)
	}

	const changeField = event => {
		const { name, value } = event.currentTarget
		setState(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<section className={'orders-page'}>
			<h1 className={'page-title'}>Работа с заказами</h1>
			<section className={'orders-manager'}>
				<div className={'orders-manager__item'}>
					<h2 className={'orders-manager__title'}>Поиск по номеру заказа</h2>
					<input name={'number'} value={state.number} onChange={changeField} />

					<button className={'button'} onClick={() => setAction('getByNumber')}>
						Поиск
					</button>
				</div>
				<div className={'orders-manager__item'}>
					<h2 className={'orders-manager__title'}>Поиск по email заказчика</h2>
					<input name={'email'} value={state.email} onChange={changeField} />
					<button className={'button'} onClick={() => setAction('getByEmail')}>
						Поиск
					</button>
				</div>
				<div className={'orders-manager__item'}>
					<h2 className={'orders-manager__title'}>
						Поиск по фамилии заказчика
					</h2>
					<input
						name={'surname'}
						value={state.surname}
						onChange={changeField}
					/>

					<button
						className={'button'}
						onClick={() => setAction('getBySurname')}
					>
						Поиск
					</button>
				</div>
				<div className={'orders-manager__item'}>
					<h2 className={'orders-manager__title'}>
						Отобразить заказы неавторизованных пользователей
					</h2>

					<button
						className={'button'}
						onClick={() => setAction('getByNotRegUser')}
					>
						Поиск
					</button>
				</div>
			</section>

			<section className={'orders-data'}>
				<h2 className={'page-title'}>Заказы</h2>
				{isLoading ? (
					<Preloader title={'Осуществляется поиск...'} />
				) : errorMsg ? (
					<Error title={errorMsg} />
				) : orders && orders.length > 0 ? (
					<OrdersList
						orders={orders}
						changeOrderStatus={changeOrderStatusAction}
						getNewData={getNewData}
					/>
				) : (
					<Empty title={'Нет заказов для отображения'} />
				)}
			</section>
		</section>
	)
}

export default connect(state => ({ data: getOrdersDataSelector(state) }), {
	getOrdersByNumberAction,
	getOrdersByEmailAction,
	getOrdersBySurnameAction,
	getOrdersByNotRegUsersAction,
	changeOrderStatusAction,
	deleteOrderAction,
})(Orders)
