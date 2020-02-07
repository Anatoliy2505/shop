import React from 'react';

const MainSliderItem = ({ img, title, desc }) => {
	return (
		<div className={'slick-item'}>
			<img className={'slick-item__img'} src={img} alt={title} />
			<div className={'slick-item__text'}>
				<div className={'slick-item__text-container'}>
					<span className={'slick-item__text-title'}>{title}</span>
					<span className={'slick-item__text-desc'}>{desc}</span>
				</div>
			</div>
		</div>
	);
};

export { MainSliderItem };
