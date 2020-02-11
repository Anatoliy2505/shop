import React from 'react';

import { ProductList } from '../Catalog/components/ProductLIst';

import { MainSlider, ProductSlider } from './components';

const Home = () => {
	return (
		<div>
			<MainSlider />

			<ProductSlider mainPage={'hits'} title={'Хиты продаж'} href={'/hits'} />

			<ProductSlider mainPage={'sale'} title={'Клёвые скидки'} href={'/sale'} />

			<ProductList />
		</div>
	);
};

export { Home };
