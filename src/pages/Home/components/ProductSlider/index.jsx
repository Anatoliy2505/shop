import React from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ProductSlider.scss';
import { ProductCard } from '../../../../components/ProductCard';

const products = [
	{
		id: '1',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: null,
		count: 10
	},
	{
		id: '2',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 0
	},
	{
		id: '3',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10
	},
	{
		id: '4',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: null,
		count: 0
	},
	{
		id: '5',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10
	},
	{
		id: '6',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10
	},
	{
		id: '7',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10
	}
];

const ProductSlider = ( { products, title, href, mainPage } ) => {
	const settings = {
		// autoplay: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1503,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1263,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
      },
    ]          
	};
	const sliderItems = products.map((item) => <ProductCard key={item.id} mainPage={mainPage} {...item} />);
	return (
		<>
		{
			products ? 
        <section className="product-slider">
          {title ? <h2 className={"section-title"}><Link to={href} className={'section-title__wrap'}>{title}</Link></h2> : null}
          <Slider {...settings} className={'slick-products__list'}>{sliderItems}</Slider>
        </section> : null
		}
		</>
		
	);
};

ProductSlider.defaultProps = {
	products
};

export { ProductSlider };
