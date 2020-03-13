import React from 'react'
import { Link } from 'react-router-dom'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './CategoriesSlider.scss'
import { CategoryCard } from '../../../../components/CategoryCard'

const categories = [
	{
		id: '1',
		name: 'materials',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: null,
		count: 10,
	},
	{
		id: '2',
		name: 'materials',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 0,
	},
	{
		id: '3',
		name: 'materials',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10,
	},
	{
		id: '4',
		name: 'materials',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: null,
		count: 0,
	},
	{
		id: '5',
		name: 'materials',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10,
	},
	{
		id: '6',
		name: 'materials',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10,
	},
	{
		id: '7',
		name: 'materials',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10,
	},
]

export const CategoriesSlider = ({ categories, title, href, page }) => {
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
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1263,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	}
	const sliderItems = categories.map(item => (
		<CategoryCard key={item.id} page={page} {...item} />
	))
	return (
		<>
			{categories ? (
				<section className="categories-slider">
					{title ? (
						<h2 className={'section-title'}>
							<Link
								to={href}
								className={'section-title__wrap'}
								title={`Увидеть все ${title}`}
							>
								{title}
							</Link>
						</h2>
					) : null}
					<Slider {...settings} className={'slick-categories__list'}>
						{sliderItems}
					</Slider>
				</section>
			) : null}
		</>
	)
}

CategoriesSlider.defaultProps = {
	categories,
}
