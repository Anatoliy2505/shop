import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './MainSlider.scss';

const MainSlider = () => {
	const settings = {
		dots: true,
		// autoplay: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<Slider {...settings} className={'slick'}>
			<div className={'slick-item'}>
				<img
					className={'slick-item__img'}
					src={'https://im0-tub-ru.yandex.net/i?id=ca883a88998f1ac986b566e41a274872-l&n=13'}
					alt={'img'}
				/>
				<div className={'slick-item__text'}>
					<div className={'slick-item__text-container'}>
						<span className={'slick-item__text-title'}>
							VI Открытый Региональный чемпионат «Молодые профессионалы» (WorldSkills Russia) – 2019 в
							Кузбассе
						</span>
						<span className={'slick-item__text-desc'}>
							VI Открытый Региональный чемпионат «Молодые профессионалы» (WorldSkills Russia) – 2019 в
							Кузбассе
						</span>
					</div>
				</div>
			</div>
			<div className={'slick-item'}>
				<img
					className={'slick-item__img'}
					src={
						'https://tambovinfo.ru/wp-content/uploads/2019/10/v-tambovskoj-oblasti-u-rybaka-sluchilsya-pristup-epilepsii-on-upal-v-vodu-i-utonul.jpg'
					}
					alt={'img'}
				/>
				<div className={'slick-item__text'}>
					<div className={'slick-item__text-container'}>
						<span className={'slick-item__text-title'}>Выбор очевиден!</span>
						<span className={'slick-item__text-desc'}>
							Мы подготовили отличное предложение! Только сейчас вы можете приобрести мощные и надежные
							мультипликаторные катушки для морской рыбалки Penn Rival 30 LW и Penn Rival 30 LW LH по
							суперцене - всего за 4 940 рублей!
						</span>
					</div>
				</div>
			</div>
			<div className={'slick-item'}>
				<img
					className={'slick-item__img'}
					src={
						'https://sm-news.ru/wp-content/uploads/2019/11/25/tild3563-3239-4431-b135-383638616430__37311427_21575435776.jpg'
					}
					alt={'img'}
				/>
				<div className={'slick-item__text'}>
					<div className={'slick-item__text-container'}>
						<span className={'slick-item__text-title'}>
							VI Открытый Региональный чемпионат «Молодые профессионалы» (WorldSkills Russia) – 2019 в
							Кузбассе
						</span>
						<span className={'slick-item__text-desc'}>
							VI Открытый Региональный чемпионат «Молодые профессионалы» (WorldSkills Russia) – 2019 в
							Кузбассе
						</span>
					</div>
				</div>
			</div>
		</Slider>
	);
};

export { MainSlider };
