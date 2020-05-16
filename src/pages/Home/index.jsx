import React from 'react'
import { useSetToast } from '../../hooks'
import {
	MainSlider,
	HomeNews,
	HitsSlider,
	SaleSlider,
	// VkPosts,
} from './components'
import './Home.scss'

const Home = () => {
	const { setToast } = useSetToast()

	const addToast = message => {
		setToast(message)
	}

	return (
		<>
			<button
				onClick={() =>
					addToast({
						data: {
							title: 'error',
							message: 'This is a success toast component',
							type: 'success',
						},
						duration: 3000,
					})
				}
			>
				Добавить
			</button>
			<MainSlider />
			<HomeNews />
			<HitsSlider />
			<SaleSlider />
			{/* <VkPosts />*/}
		</>
	)
}

export default Home
