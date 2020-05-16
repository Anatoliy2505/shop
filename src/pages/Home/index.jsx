import React from 'react'
import {
	MainSlider,
	HomeNews,
	HitsSlider,
	SaleSlider,
	// VkPosts,
} from './components'
import './Home.scss'

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
