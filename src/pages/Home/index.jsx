import React from 'react';

import { ProductList } from '../Catalog/components/ProductLIst';
import { NewsList } from '../../components';
import { MainSlider, ProductSlider } from './components';

const Home = () => {
	return (
		<div>
			<MainSlider />

			<NewsList />

			<ProductSlider mainPage={'hits'} title={'Хиты продаж'} href={'/hits'} />

			<ProductSlider mainPage={'sale'} title={'Клёвые скидки'} href={'/sale'} />

			<ProductList />
		</div>
	);
};

export { Home };
