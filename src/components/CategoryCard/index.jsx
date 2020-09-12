import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './CategoryCard.scss'

export const CategoryCard = ({
	image,
	title,
	price,
	isset,
	sale,
	name,
	from,
	page,
}) => {
	const linkTo = `/${page || 'product/' + from}/${name}`
	return (
		<div className={'category__item'}>
			<div className={'category__card'}>
				<Link to={linkTo} className={'category__wrap-img'} title={title}>
					<img
						src={process.env.PUBLIC_URL + image}
						alt={title}
						className={'category__img'}
					/>
				</Link>
				<div className="category__desc">
					<Link to={linkTo} className={'category__wrap-title'}>
						<h3 className="category__title">{title}</h3>
					</Link>
					<span
						className={
							'category__existence' +
							(!isset ? ' category__existence--empty' : '')
						}
					>
						{isset ? 'В наличии' : 'Временно отсутствует'}
					</span>
					<div className="category__wrap-price">
						<span className={'category__price-sale  category__price-item'}>
							{sale && isset ? (
								<span className={'category-sale'}>Есть скидки</span>
							) : null}
						</span>
						<span className={'category__price  category__price-item'}>
							{price} <span className="category__currency">руб.</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

CategoryCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	sale: PropTypes.bool.isRequired,
	name: PropTypes.string,
	from: PropTypes.string,
	page: PropTypes.string,
}
