import React from 'react'
import './Home.scss'
import { Message, Toast } from '../../components'

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

			<Toast
				data={{
					title: 'Success',
					message: 'This is a success toast component',
				}}
			/>

			<HomeNews />

			<HitsSlider />

			<SaleSlider />

			{/* <VkPosts />*/}
		</>
	)
}

export default Home
