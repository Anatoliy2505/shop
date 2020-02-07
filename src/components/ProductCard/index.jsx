import React from 'react';

import './ProductCard.scss';

const ProductCard = ({ id, img, title, price, priceOld, count }) => {
	return (
		<li className={'product__item'}>
			<div className={'product__card'}>
				<a href={'category/' + id} className={'product__wrap-img'}>
					<img src={img} alt={title} className={'product__img'} />
				</a>
				<div className="product__desc">
					<a href={'category/' + id} className={'product__wrap-title'} title={title}>
						<h3 className="product__title">{title}</h3>
					</a>
					<span className={'product__existence ' + (!count ? 'product__existence--empty' : '')}>
						{count ? 'В наличии' : 'Временно отсутствует'}
					</span>
					<div className="product__wrap-price">
						<span className={'product__price-old  product__price-item'}>
							{priceOld ? (
								<span className={'product__price-line'}>
									{priceOld} <span className="product__currency">руб.</span>
								</span>
							) : null}
						</span>
						<span className={'product__price  product__price-item'}>
							{price} <span className="product__currency">руб.</span>
						</span>
					</div>
				</div>
			</div>
		</li>
	);
};

ProductCard.defaultProps = {
	id: '1',
	img: 'https://sibirskylov.ru/img/magazin/head/common.png',
	title: 'Пневматическая Винтовка Daisy 74 CO2',
	price: '6000',
	priceOld: '7000',
	count: 10
};

export { ProductCard };
