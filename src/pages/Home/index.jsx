import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { newsPartSelector } from '../News/redux/selctors'
import { getNews } from '../News/redux/actions'

// import { ProductList } from '../Catalog/components/ProductLIst';
import { NewsList } from '../../components'
import { MainSlider, ProductSlider, VkPosts } from './components'

const Home = ({ news, getNews }) => {
	useEffect(() => {
		if (!news) {
			getNews()
		}
	}, [news, getNews])

	return (
		<div>
			
			<MainSlider />

			{news && (
				<section className={'news'}>
					<NewsList data={news} isHome={true} />
				</section>
			)}

			<ProductSlider mainPage={'hits'} title={'Хиты продаж'} href={'/hits'} />

			<ProductSlider mainPage={'sale'} title={'Клёвые скидки'} href={'/sale'} />

			<VkPosts />

			{/* <ProductList /> */}
			
		</div>
	)
}

export default connect(
	state => ({
		news: newsPartSelector(state),
	}),
	{ getNews }
)(Home)
