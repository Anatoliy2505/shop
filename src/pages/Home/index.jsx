import React from 'react'
import './Home.scss'

import {
	MainSlider,
	// VkPosts,
	HomeNews,
	HitsSlider,
	SaleSlider,
} from './components'

const Home = () => {
	return (
		<>
			<MainSlider />
			<HomeNews />

			<HitsSlider />

			<SaleSlider />

			{/* <VkPosts />*/}
		</>
	)
}

export default Home
