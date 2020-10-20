import React, { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const CartItem = ({
	add,
	link,
	image,
	title,
	count,
	price,
	remove,
	subtract,
	properties,

	id,
}) => {
	const location = useLocation()

	const propertiesElements = useMemo(() => {
		const lengthProp = properties ? properties.length : 0
		if (lengthProp > 0) {
			const items = properties.map((item, index) => (
				<span key={index + lengthProp}>
					{index === lengthProp - 1 ? (
						<span className={'product-property'}>
							{item.title}: {item.value}
						</span>
					) : (
						<span className={'product-property'}>
							{item.title}: {item.value},{' '}
						</span>
					)}
				</span>
			))
			return items
		}
		return null
	}, [properties])

	const subtractProduct = () => {
		if (count - 1 === 0) {
			return remove(id)
		}
		subtract(id)
	}

	return (
		<tr className={'main-cart__item'}>
			<td className={'main-cart__item-img'}>
				<NavLink
					to={{
						pathname: link,
						state: { prevPath: location.pathname },
					}}
				>
					<img
						src={
							process.env.PUBLIC_URL +
							(image ? image : '/images/products/noImage.jpg')
						}
						alt={'img'}
					/>
				</NavLink>
			</td>
			<td className={'main-cart__item-desc'}>
				<NavLink
					to={{
						pathname: link,
						state: { prevPath: location.pathname },
					}}
				>
					<span className={'product-title'}>{title}</span>
					{propertiesElements ? <>({propertiesElements})</> : null}
				</NavLink>
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
