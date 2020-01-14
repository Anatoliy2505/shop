import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './MainSlider.scss'

const MainSlider = () => {
	const settings = {
		dots: true,
		// autoplay: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<Slider {...settings} className={'slick'}>
			<div className={'main-slider__item'}>
				<img
					className={'slick-slide__img'}
					src={
						'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-1.jpg'
					}
					alt={'img'}
				/>
			</div>
			<div className={'main-slider__item'}>
				<img
					className={'slick-slide__img'}
					src={
						'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-2.jpg'
					}
					alt={'img'}
				/>
			</div>
			<div className={'main-slider__item'}>
				<img
					className={'slick-slide__img'}
					src={
						'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-3.jpg'
					}
					alt={'img'}
				/>
			</div>
			<div className={'main-slider__item'}>
				<img
					className={'slick-slide__img'}
					src={
						'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-4.jpg'
					}
					alt={'img'}
				/>
			</div>
		</Slider>
	)
}

export { MainSlider }
