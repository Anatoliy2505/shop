import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './MainSlider.scss';
import { MainSliderItem } from '../MainSliderItem';

const sliderData = [
	{
		id: 1,
		img: 'https://im0-tub-ru.yandex.net/i?id=ca883a88998f1ac986b566e41a274872-l&n=13',
		title: 'Выбор очевиден!',
		desc:
			'Мы подготовили отличное предложение! Только сейчас вы можете приобрести мощные и надежные	мультипликаторные катушки для морской рыбалки Penn Rival 30 LW и Penn Rival 30 LW LH по суперцене - всего за 4 940 рублей!'
	},
	{
		id: 2,
		img:
			'https://tambovinfo.ru/wp-content/uploads/2019/10/v-tambovskoj-oblasti-u-rybaka-sluchilsya-pristup-epilepsii-on-upal-v-vodu-i-utonul.jpg',
		title: 'Выбор очевиден!',
		desc:
			'Мы подготовили отличное предложение! Только сейчас вы можете приобрести мощные и надежные	мультипликаторные катушки для морской рыбалки Penn Rival 30 LW и Penn Rival 30 LW LH по суперцене - всего за 4 940 рублей!'
	},
	{
		id: 3,
		img:
			'https://sm-news.ru/wp-content/uploads/2019/11/25/tild3563-3239-4431-b135-383638616430__37311427_21575435776.jpg',
		title: 'Выбор очевиден!',
		desc:
			'Мы подготовили отличное предложение! Только сейчас вы можете приобрести мощные и надежные	мультипликаторные катушки для морской рыбалки Penn Rival 30 LW и Penn Rival 30 LW LH по суперцене - всего за 4 940 рублей!'
	}
];

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
	const sliderItems = sliderData.map((item) => <MainSliderItem key={item.id} {...item} />);
	return (
		<>
		{
			sliderData ? <Slider {...settings} className={'slick'}>{sliderItems}</Slider> : null
		}
		</>
		
	);
};

export { MainSlider };
