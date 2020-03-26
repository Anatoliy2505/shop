import React, { useState } from 'react'
import { connect } from 'react-redux'
import { BreadCrumbs, CategoriesSlider } from '../../components'
import { sidebarSelector } from '../../redux/selectors'
import { createRoutesFromCategiries } from '../../utils/helpers/createRoutesFromCategiries'

import './ProductsDetail.scss'
import { Properties } from './components'

// const props = {
// 	isLoading: false,
// 	errorMsg: null,
// 	categoryName: null,
// 	recomendation: null,
// 	catygoryData: null,
// 	productsDats: null
// }
const props = {
	isLoading: false,
	errorMsg: null,
	recomendation: [
		{
			id: 21,
			name: 'fishing_equipment',
			parent_id: 20,
			img: 'https://sibirskylov.ru/img/magazin/head/common.png',
			title: 'Рыболовные снасти',
			price: 6000,
			priceOld: null,
			count: 10,
		},
		{
			id: 22,
			parent_id: 21,
			name: 'fishing_equipment',
			img: 'https://sibirskylov.ru/img/magazin/head/common.png',
			title: 'Пневматическая Винтовка Daisy 74 CO2',
			price: 6000,
			priceOld: null,
			count: 10,
		},
		{
			id: 23,
			parent_id: 22,
			name: 'fishing_equipment',
			img: 'https://sibirskylov.ru/img/magazin/head/common.png',
			title: 'Пневматическая Винтовка Daisy 74 CO2',
			price: 6000,
			priceOld: null,
			count: 10,
		},
		{
			id: 24,
			parent_id: 23,
			name: 'fishing_equipment',
			img: 'https://sibirskylov.ru/img/magazin/head/common.png',
			title: 'Пневматическая Винтовка Daisy 74 CO2',
			price: 6000,
			priceOld: null,
			count: 10,
		},
		{
			id: 25,
			parent_id: 24,
			name: 'fishing_equipment',
			img: 'https://sibirskylov.ru/img/magazin/head/common.png',
			title: 'Пневматическая Винтовка Daisy 74 CO2',
			price: 6000,
			priceOld: null,
			count: 10,
		},
		{
			id: 26,
			parent_id: 25,
			name: 'fishing_equipment',
			img: 'https://sibirskylov.ru/img/magazin/head/common.png',
			title: 'Пневматическая Винтовка Daisy 74 CO2',
			price: 6000,
			priceOld: null,
			count: 10,
		},
	],
	catygoryData: {
		id: 28,
		name: 'headers',
		title: 'Латунные головки',
		mainParametr: 'цвет',
		description:
			'Головки из сплава латуни. Представлены в диаметрах 2,5 и 3мм.	Головки 2,5 мм подходят к крючкам номер 16,14,12. Головки 3мм	подходят к крючкам номер 12,10,8,6. Вес головки 2,5 мм – 0,03	грамма. Вес головки 3мм – 0,05 грамма. Представлены в трех цветах:	Желтый, Белый, Никель. Одна пачка – 100 штук. Для заказа вам нужно выбрать Диаметр, Цвет и Количество упаковок.',
		price: 150,
		newPrice: 100,
	},
	products: [
		{
			id: 1,
			title: 'Золотые головки',
			price: 150,
			img: 'https://sibirskylov.ru/img/magazin/head/gold.png',
			name: 'Золотой',
			properties: [
				{
					title: 'Диаметр',
					value: '3 мм',
				},
				{
					title: 'Вес',
					value: '3 гр',
				},
			],
		},
		{
			id: 2,
			title: 'Серебрянные головки',
			price: 150,
			img: 'https://sibirskylov.ru/img/magazin/head/silver.png',
			name: 'Серебро',
			properties: [
				{
					title: 'Диаметр',
					value: '3 мм',
				},
				{
					title: 'Вес',
					value: '3 гр',
				},
			],
		},
		{
			id: 3,
			title: 'Тёмные головки',
			price: 150,
			img: 'https://sibirskylov.ru/img/magazin/head/black.png',
			name: 'Тёмный никель',
			properties: [
				{
					title: 'Диаметр',
					value: '3 мм',
				},
				{
					title: 'Вес',
					value: '3 гр',
				},
			],
		},
		{
			id: 4,
			title: 'Бронзовые головки',
			price: 150,
			img: 'https://sibirskylov.ru/img/magazin/head/gold.png',
			name: 'Бронза',
			properties: [
				{
					title: 'Диаметр',
					value: '3 мм',
				},
				{
					title: 'Вес',
					value: '3 гр',
				},
			],
		},
		{
			id: 5,
			title: 'Латунные головки',
			price: 150,
			img: 'https://sibirskylov.ru/img/magazin/head/silver.png',
			name: 'Латунь',
			properties: [
				{
					title: 'Диаметр',
					value: '3 мм',
				},
				{
					title: 'Вес',
					value: '3 гр',
				},
			],
		},
	],
}

const ProductsDetail = ({
	isLoading,
	errorMsg,
	recomendation,
	catygoryData,
	products,
	categories,
	match: { url, params },
}) => {
	const [productId, setProductId] = useState(
		products ? Number(products['0'].id) : null
	)
	const [productData, setProductData] = useState(
		productId ? products.find(item => item.id === productId) : null
	)
	const [productCount, setProductCount] = useState(1)

	let routes = null
	const utlItems = url.split('/').slice(1)
	// const productsCategory = utlItems[utlItems.length - 1]

	if (utlItems[0] === 'hits') {
		routes = [{ title: 'Хиты продаж', path: '/hits' }]
	} else if (utlItems[0] === 'sale') {
		routes = [{ title: 'Товары со скидками', path: '/sale' }]
	} else if (utlItems[0] === 'search') {
		routes = [{ title: 'Страница поиска', path: '/search' }]
	} else if (utlItems[0] === 'recommendation') {
		routes = [{ title: 'Рекомендации', path: '/recommendation' }]
	} else if (categories.data) {
		const { mainCategory, parentCategory } = params
		routes = createRoutesFromCategiries(
			categories.data,
			mainCategory,
			parentCategory
		)
	}

	const selectProduct = e => {
		const id = Number(e.currentTarget.dataset.id)
		if (productId !== id) {
			setProductId(id)
			setProductData(products.find(item => item.id === id))
			setProductCount(1)
		}
	}

	console.log(productData)

	const changeProductCount = e => {
		setProductCount(e.currentTarget.value)
	}

	const productsItems = () =>
		products.map(item => (
			<div
				key={item.id}
				className={
					item.id === productId ? 'products-item active' : 'products-item'
				}
				data-id={item.id}
				onClick={selectProduct}
			>
				<img className={'products-item__img'} src={item.img} alt={item.title} />
				<span className={'products-item__name'}>{item.name}</span>
			</div>
		))

	return (
		<section className={'products'}>
			<BreadCrumbs
				routes={routes}
				lastElementName={'Обзор товара' || 'Товар не найден'}
			/>

			{products && catygoryData ? (
				<>
					<h1 className={'page-title'}>{catygoryData.title}</h1>
					<div className={'products-container'}>
						<div className="products-section one">
							<div className="products__wrap-img">
								<img src={productData.img} alt={productData.title} />
							</div>

							<form className={'products-actions'}>
								<h3 className="products-title">{productData.title}</h3>
								<div className="products-actions__container">
									<input
										type={'number'}
										className={'products-actions__count'}
										min={'1'}
										onChange={changeProductCount}
										value={productCount}
									/>
									<button type={'submit'} className={'products-actions__add'}>
										Добавить в корзину
									</button>
								</div>
								<span className="products-actions__summ">
									Сумма: {productCount * catygoryData.price} руб
								</span>
							</form>
						</div>

						<div className="products-section two">
							<h3 className="products-title">Описание:</h3>
							<div className="products-description">
								{catygoryData.description}
							</div>

							<Properties
								properties={productData.properties}
								title={productData.title}
								name={productData.name}
								mainField={catygoryData.mainParametr}
								price={catygoryData.price}
							/>

							<h3 className="products-title">
								Выберите {catygoryData.mainParametr}:
							</h3>
							<div className="products-items">
								<div className="products-items__container">
									{products ? productsItems() : null}
								</div>
							</div>
						</div>
					</div>
					<div className="products-recomendation">
						<CategoriesSlider
							categories={recomendation}
							title={'Рекомнедованные товары'}
							href={'/recommendation'}
							page={'recommendation'}
						/>
					</div>
				</>
			) : (
				<h1 className={'page-title'}>Товар временно отсутствует</h1>
			)}
		</section>
	)
}

ProductsDetail.defaultProps = props

export default connect(state => ({
	categories: sidebarSelector(state),
}))(ProductsDetail)
