import React, { useCallback, useMemo } from 'react'

export const Products = ({ products }) => {
	const getProductsList = useCallback(() => {
		return products.map((item, index) => (
			<tr key={item._id} className={'ordered-products__item'}>
				<td>{index + 1}</td>
				<td className={'name'}>{item.title}</td>
				<td>{item.price}</td>
				<td>{item.count}</td>
				<td>{item.price * item.count}</td>
			</tr>
		))
	}, [products])

	const total = useMemo(() => {
		if (products && products.length > 0) {
			let totalCount = 0
			let totalSumm = 0
			for (let item of products) {
				totalCount += item.count
				totalSumm += item.count * item.price
			}
			return { totalCount, totalSumm }
		}
		return {}
	}, [products])

	return (
		<section className={'order-products'}>
			{products && products.length > 0 ? (
				<>
					<h2 className={'orders-manager__title'}>Заказанные товары:</h2>
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
						<tbody>{getProductsList()}</tbody>
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
						<button className={'button'} onClick={() => {}}>
							Изменить заказ
						</button>
						<button className={'button'} onClick={() => {}}>
							Заменить заказ
						</button>
					</div>
				</>
			) : null}
		</section>
	)
}
