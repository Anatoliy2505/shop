import React, { useMemo } from 'react'

export const CartItem = ({
	image,
	title,
	count,
	price,
	add,
	subtract,
	properties,
	remove,
	id,
}) => {
	const subtractProduct = () => {
		if (count - 1 === 0) {
			return remove(id)
		}
		subtract(id)
	}
	const propertiesElements = useMemo(() => {
		const lengthProp = properties.length
		if (lengthProp > 0) {
			const items = properties.map((item, index) => (
				<span className={'product-property'}>
					{index === lengthProp - 1 ? (
						<>
							{item.title}: {item.value}
						</>
					) : (
						<>
							{item.title}: {item.value},
						</>
					)}
				</span>
			))
			return items
		}
		return null
	}, [properties])
	return (
		<tr className={'main-cart__item'}>
			<td className={'main-cart__item-img'}>
				<img src={process.env.PUBLIC_URL + image} alt={'img'} />
			</td>
			<td className={'main-cart__item-desc'}>
				{title}
				{propertiesElements ? (
					<span className={'wrap-product__properties'}>
						({propertiesElements})
					</span>
				) : null}
			</td>
			<td className={'main-cart__item-price'}>{price}</td>
			<td className="main-cart__item-count">
				<div className={'main-cart__wrap-count'}>
					<span className={'subtract'} onClick={subtractProduct}>
						<i className={'far fa-minus-square'} />
					</span>
					<span className={'main-cart__item-total'}>{count}</span>
					<span className={'add'} onClick={() => add(id)}>
						<i className={'far fa-plus-square'} />
					</span>
				</div>
			</td>
			<td className={'main-cart__item-summ'}>{price * count}</td>
			<td className={'main-cart__item-remove'}>
				<span className={'remove-button'} onClick={() => remove(id)}>
					<i className={'far fa-times-circle'} />
				</span>
			</td>
		</tr>
	)
}
