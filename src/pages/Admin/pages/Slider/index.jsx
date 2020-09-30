import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { AdminActions } from '../../components'
import { CreateSlide, UpdateSlide, DeleteSlide } from './components'
import {
	createSlide,
	updateSlide,
	removeSlide,
	getAllSlides,
} from './redux/actions'
import { getAllSlidesSelector } from './redux/selectors'
export const Groups = ({
	slides,
	createSlide,
	updateSlide,
	removeSlide,
	getAllSlides,
}) => {
	useEffect(() => {
		if (!slides) {
			getAllSlides()
		}
	}, [slides, getAllSlides])

	return (
		<>
			<h1 className={'page-title'}>Слайдер</h1>
			<AdminActions
				create={{ component: CreateSlide, createSlide, getAllSlides }}
				update={{
					component: UpdateSlide,
					slides,
					updateSlide,
					getAllSlides,
				}}
				delete={{
					component: DeleteSlide,
					slides,
					removeSlide,
					getAllSlides,
				}}
			/>
		</>
	)
}

export default connect(
	state => ({
		slides: getAllSlidesSelector(state),
	}),
	{ createSlide, updateSlide, removeSlide, getAllSlides }
)(Groups)
