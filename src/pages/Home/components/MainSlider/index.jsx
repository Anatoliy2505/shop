import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { MainSliderItem } from '../MainSliderItem'
import { getSlidesSelector } from './redux/selectors'
import { getSlides } from './redux/actions'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MainSlider.scss'

const MainSlider = ({ sliderData: { slides }, getSlides }) => {
	const settings = {
		dots: true,
		autoplay: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	useEffect(() => {
		if (!slides) {
			getSlides()
		}
	}, [slides, getSlides])

	const getsliderItems = useCallback(
		() => slides.map(item => <MainSliderItem key={item._id} {...item} />),
		[slides]
	)

	return (
		<>
			{slides && slides.length > 0 ? (
				<Slider {...settings} className={'slick'}>
					{getsliderItems()}
				</Slider>
			) : null}
		</>
	)
}

export default connect(
	state => ({
		sliderData: getSlidesSelector(state),
	}),
	{ getSlides }
)(MainSlider)
