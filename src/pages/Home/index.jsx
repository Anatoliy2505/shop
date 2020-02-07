import React from 'react';
import { ProductCard } from '../../components';

import { MainSlider } from './components';

const Home = () => {
	return (
		<div>
			<MainSlider />
			<section className="product-slider">
				<ul className="product__list">
					<ProductCard id={'1'} />
					<ProductCard id={'2'} />
					<ProductCard id={'3'} />
					<ProductCard id={'4'} />
					<ProductCard id={'5'} />
				</ul>
			</section>
		</div>
	);
};

export { Home };
