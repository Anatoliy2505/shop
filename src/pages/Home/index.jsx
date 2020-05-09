import React from 'react'
import './Home.scss'
import { Message } from '../../components'

import {
	MainSlider,
	HomeNews,
	HitsSlider,
	SaleSlider,
	// VkPosts,
} from './components'

const Home = () => {
	return (
		<>
			<MainSlider />

			<Message delay={6000} type={'success'}>
				<div>Текст сообщения</div>
			</Message>

			<HomeNews />

			<HitsSlider />

			<SaleSlider />

			{/* <VkPosts />*/}
		</>
	)
}

export default Home
