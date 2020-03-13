import React from 'react'
import { Link } from 'react-router-dom'

import './CategoryCard.scss'

export const CategoryCard = ({
	img,
	title,
	price,
	priceOld,
	count,
	name,
	path,
	page,
}) => {
	return (
		<div className={'category__item'}>
			<div className={'category__card'}>
				<Link
					to={`/${page || path}/${name}`}
					className={'category__wrap-img'}
					title={title}
				>
					<img src={img} alt={title} className={'category__img'} />
				</Link>
				<div className="category__desc">
					<Link
						to={`/${page || path}/${name}`}
						className={'category__wrap-title'}
					>
						<h3 className="category__title">{title}</h3>
					</Link>
					<span
						className={
							'category__existence ' +
							(!count ? 'category__existence--empty' : '')
						}
					>
						{count ? 'В наличии' : 'Временно отсутствует'}
					</span>
					<div className="category__wrap-price">
						<span className={'category__price-old  category__price-item'}>
							{priceOld ? (
								<span className={'category__price-line'}>
									{priceOld} <span className="category__currency">руб.</span>
								</span>
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

CategoryCard.defaultProps = {
	id: '1',
	img: 'https://sibirskylov.ru/img/magazin/head/common.png',
	title: 'Пневматическая Винтовка Daisy 74 CO2',
	price: '6000',
	priceOld: '7000',
	count: 10,
}
