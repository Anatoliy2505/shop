import React, { useEffect, useRef, useCallback } from 'react'
import { connect } from 'react-redux'
import { getCartSelector } from './redux/selectors'
import { userDataSelector } from '../User/redux/selectors'
import { isAuthSelector } from '../Auth/redux/selectors'
import { getUserData } from '../User/redux/actions'
import {
	addOneProductToCart,
	subtractOneProductFromCart,
	removeOneProductFromCart,
	removeAllProductsFromCart,
	getProductsForCart,
	resetProductsData,
} from './redux/actions'

import { CartItem, Order } from './components'
import { Preloader, Empty, Error, Modal } from '../../components'
import './Cart.scss'

const Cart = ({
	cartData: {
		products,
		totalCount,
		totalPrice,
		productsIds,
		loadedData,
		isLoading,
		errorMsg,
	},
	isAuth,
	userData: { user, address },
	addOneProductToCart,
	subtractOneProductFromCart,
	removeOneProductFromCart,
	removeAllProductsFromCart,
	getProductsForCart,
	resetProductsData,
	getUserData,
}) => {
	const didMount = useRef(false)

	useEffect(() => {
		if (didMount) {
			didMount.current = false
			resetProductsData()
		}
	}, [didMount, resetProductsData])

	useEffect(() => {
		if (
			!loadedData &&
			!errorMsg &&
			productsIds.length > 0 &&
			!didMount.current
		) {
			getProductsForCart({ productsIds: [...productsIds] })
			didMount.current = true
		}
	}, [loadedData, errorMsg, productsIds, getProductsForCart])

	useEffect(() => {
		if (isAuth && !user && !address) {
			getUserData()
		}
	}, [user, address, getUserData, isAuth])

	const getOrderProducts = useCallback(() => {
		const orderProducts = productsIds.map(id => {
			return (
				<CartItem
					key={id}
					id={id}
					{...products[id]}
					add={addOneProductToCart}
					subtract={subtractOneProductFromCart}
					remove={removeOneProductFromCart}
				/>
			)
		})
		return orderProducts
	}, [
		productsIds,
		products,
		addOneProductToCart,
		subtractOneProductFromCart,
		removeOneProductFromCart,
	])

	return (
		<div className={'page-cart'}>
			<h1 className={'page-title'}>Ваша корзина</h1>
			{isLoading ? (
				<Preloader title={'Загружаются данные...'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : productsIds.length > 0 && loadedData ? (
				<>
					<table className={'main-cart'}>
						<thead className={'main-cart__header'}>
							<tr>
								<th>Вид</th>
								<th className={'desc'}>Товар</th>
								<th>Цена р.</th>
								<th>Кол.</th>
								<th>Сумма р.</th>
								<th>
									<i className={'fas fa-trash-alt'}></i>
								</th>
							</tr>
						</thead>
						<tbody>{getOrderProducts()}</tbody>
						<tfoot className={'main-cart__footer'}>
							<tr>
								<td className={'main-cart__footer-title'} colSpan={'3'}>
									Итого:
								</td>
								<td>{totalCount}</td>
								<td>{totalPrice}</td>
								<td></td>
							</tr>
						</tfoot>
					</table>
					<div className="wrap-button">
						<Modal textButton={'Заказать'}>
							<Order user={user} address={address} products={products} />
						</Modal>
						<button className={'button'} onClick={removeAllProductsFromCart}>
							Очистить
						</button>
					</div>
				</>
			) : (
				<Empty title={'Вы пока не выбрали ни одного товара'} />
			)}
		</div>
	)
}

export default connect(
	state => ({
		cartData: getCartSelector(state),
		userData: userDataSelector(state),
		isAuth: isAuthSelector(state),
	}),
	{
		addOneProductToCart,
		subtractOneProductFromCart,
		removeOneProductFromCart,
		removeAllProductsFromCart,
		getProductsForCart,
		resetProductsData,
		getUserData,
	}
)(Cart)
