import React from 'react'

const MainSliderItem = ({ image, title, description }) => {
	return (
		<div className={'slick-item'}>
			<img
				className={'slick-item__img'}
				src={process.env.PUBLIC_URL + image}
				alt={title}
			/>
			<div className={'slick-item__text'}>
				<div className={'slick-item__text-container'}>
					<span className={'slick-item__text-title'}>{title}</span>
					<span className={'slick-item__text-desc'}>{description}</span>
				</div>
			</div>
		</div>
	)
}

export { MainSliderItem }
