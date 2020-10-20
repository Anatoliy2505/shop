import React from 'react'
import {
	MainSlider,
	HomeNews,
	HitsSlider,
	SaleSlider,
	HomeVideos,
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
			<HomeVideos />
			{/* <VkPosts />*/}
		</>
	)
}

export default Home
