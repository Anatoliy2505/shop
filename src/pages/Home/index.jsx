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
import { useState } from 'react'

const Home = () => {
	const [message, setMessage] = useState(null)
	const addToast = message => {
		setMessage(message)
	}

	return (
		<>
			<MainSlider />
			{/* 
			<Message delay={6000} type={'success'}>
				<div>Текст сообщения</div>
			</Message> */}
			<button
				onClick={() =>
					addToast({
						title: 'Success',
						message: 'This is a success toast component',
						status: 'info',
					})
				}
			>
				Добавить
			</button>
			{message ? (
				<Toast
					data={message}
					duration={2000}
					autoDelete={true}
					position={'top-right'}
				/>
			) : null}

			<HomeNews />

			<HitsSlider />

			<SaleSlider />

			{/* <VkPosts />*/}
		</>
	)
}

export default Home
