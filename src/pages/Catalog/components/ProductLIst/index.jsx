import React from 'react'

import { ProductCard } from '../../../../components'

import './ProductList.scss'

const products = [
	{
		id: '1',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: null,
		count: 10,
	},
	{
		id: '2',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 0,
	},
	{
		id: '3',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10,
	},
	{
		id: '4',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: null,
		count: 0,
	},
	{
		id: '5',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10,
	},
	{
		id: '6',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10,
	},
	{
		id: '7',
		img: 'https://sibirskylov.ru/img/magazin/head/common.png',
		title: 'Пневматическая Винтовка Daisy 74 CO2',
		price: '6000',
		priceOld: '7000',
		count: 10,
	},
]

const ProductList = ({ products, url }) => {
	const poductsList = products.map(product => (
		<ProductCard mainPage={'catalog'} key={product.id} {...product} url={url} />
	))
	return <section className="product__list">{poductsList}</section>
}

ProductList.defaultProps = {
	products,
}

export { ProductList }
