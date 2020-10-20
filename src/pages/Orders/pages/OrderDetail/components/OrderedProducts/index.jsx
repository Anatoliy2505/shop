import React, { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSetToast } from '../../../../../../hooks/useSetToast'

import './OrderedProducts.scss'

export const OrderedProducts = ({ products, repeatOrder }) => {
	const location = useLocation()
	const { setToast } = useSetToast()
	const productsElements = useMemo(
		() =>
			products.map((item, index) => (
				<tr key={item._id} className={'ordered-products__item'}>
					<td>{index + 1}</td>
					<td className={'name'}>
						<NavLink
							to={{
								pathname: item.link,
								state: { prevPath: location.pathname },
							}}
						>
							{item.title}
						</NavLink>
					</td>
					<td>{item.price}</td>
					<td>{item.count}</td>
					<td>{item.price * item.count}</td>
				</tr>
			)),
		[products, location]
	)

	const total = useMemo(() => {
		let totalCount = 0
		let totalSumm = 0
		for (let item of products) {
			totalCount += item.count
			totalSumm += item.count * item.price
		}
		return { totalCount, totalSumm }
	}, [products])

	return (
		<section className={'ordered-products__section'}>
			<h2 className={'order-item__title'}>Заказанные товары</h2>
			<table className={'ordered-products'}>
				<thead>
					<tr className={'ordered-products__title'}>
						<th>№</th>
						<th className={'name'}>Название</th>
						<th>Цена</th>
						<th>Кол.</th>
						<th>Сумма</th>
					</tr>
				</thead>
				<tbody>{productsElements}</tbody>
				<tfoot>
					<tr className={'ordered-products__foot'}>
						<td></td>
						<td></td>
						<td>Итого:</td>
						<td>{total.totalCount}</td>
						<td>{total.totalSumm}</td>
					</tr>
				</tfoot>
			</table>
			<div className={'wrap-button'}>
				<button
					className={'button'}
					onClick={() => repeatOrder(products, setToast)}
				>
					Повторить заказ
				</button>
			</div>
		</section>
	)
}
