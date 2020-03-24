import React from 'react'
import { connect } from 'react-redux'
import { BreadCrumbs } from '../../components'
import { sidebarSelector } from '../../redux/selectors'
import { createRoutesFromCategiries } from '../../utils/helpers/createRoutesFromCategiries'

import './ProductsDetail.scss'

const ProductsDetail = ({ categories, match: { url, params } }) => {
	let routes = null
	const utlItems = url.split('/').slice(1)
	const productsCategory = utlItems[utlItems.length - 1]

	if (utlItems[0] === 'hits') {
		routes = [{ title: 'Хиты продаж', path: '/hits' }]
	} else if (utlItems[0] === 'sale') {
		routes = [{ title: 'Товары со скидками', path: '/sale' }]
	} else if (utlItems[0] === 'search') {
		routes = [{ title: 'Страница поиска', path: '/search' }]
	} else if (categories.data) {
		const { mainCategory, parentCategory } = params
		routes = createRoutesFromCategiries(
			categories.data,
			mainCategory,
			parentCategory
		)
	}

	console.log(productsCategory)

	return (
		<section className={'products'}>
			<BreadCrumbs
				routes={routes}
				lastElementName={'Обзор товара' || 'Товар не найден'}
			/>
			<h1 className={'page-title'}>Головки</h1>
			<div className={'products-container'}>
				<div className="products-section one">
					<div className="products__wrap-img">
						<img
							src={'https://sibirskylov.ru/img/magazin/head/common.png'}
							alt={'img'}
						/>
					</div>

					<form className={'products-actions'}>
						<h3 className="products-title">Золотые головки</h3>
						<div className="products-actions__container">
							<input
								type={'number'}
								className={'products-actions__count'}
								min={'1'}
							/>
							<button type={'submit'} className={'products-actions__add'}>
								Добавить в корзину
							</button>
						</div>
						<span className="products-actions__summ">Сумма: 150 руб</span>
					</form>
				</div>

				<div className="products-section two">
					<h3 className="products-title">Описание:</h3>
					<div className="products-description">
						Головки из сплава латуни. Представлены в диаметрах 2,5 и 3мм.
						Головки 2,5 мм подходят к крючкам номер 16,14,12. Головки 3мм
						подходят к крючкам номер 12,10,8,6. Вес головки 2,5 мм – 0,03
						грамма. Вес головки 3мм – 0,05 грамма. Представлены в трех цветах:
						Желтый, Белый, Никель. Одна пачка – 100 штук. Для заказа вам нужно
						выбрать Диаметр, Цвет и Количество упаковок.
					</div>

					<div className="products-properties">
						<h3 className="products-title">Характеристики:</h3>
						<div className="products-properties__item">
							<span className={'products-properties__name'}>Название:</span>{' '}
							Золотые головки
						</div>
						<div className="products-properties__item">
							<span className={'products-properties__name'}>Цвет:</span> Золотой
						</div>
						<div className="products-properties__item">
							<span className={'products-properties__name'}>Диаметр:</span> 3мм
						</div>
						<div className="products-properties__item">
							<span className={'products-properties__name'}>Вес:</span> 4гр
						</div>
						<div className="products-properties__item">
							<span className={'products-properties__name'}>Цена:</span> 150 руб
						</div>
					</div>

					<h3 className="products-title">Выберите цвет:</h3>
					<div className="products-items">
						<div className="products-items__container">
							<div className={'products-item'}>
								<img
									className={'products-item__img'}
									src={
										'https://sibirskylov.ru/img/magazin/lurex_x_type/common.png'
									}
									alt={'img'}
								/>
								<span className={'products-item__name'}>Оранжевый</span>
							</div>
							<div className={'products-item'}>
								<img
									className={'products-item__img'}
									src={
										'https://sibirskylov.ru/img/magazin/lurex_x_type/common.png'
									}
									alt={'img'}
								/>
								<span className={'products-item__name'}>
									Тёмный никель тёмный
								</span>
							</div>
							<div className={'products-item'}>
								<img
									className={'products-item__img'}
									src={'https://sibirskylov.ru/img/magazin/head/common.png'}
									alt={'img'}
								/>
								<span className={'products-item__name'}>Название 3</span>
							</div>
							<div className={'products-item'}>
								<img
									className={'products-item__img'}
									src={'https://sibirskylov.ru/img/magazin/head/common.png'}
									alt={'img'}
								/>
								<span className={'products-item__name'}>Название 4</span>
							</div>
							<div className={'products-item'}>
								<img
									className={'products-item__img'}
									src={'https://sibirskylov.ru/img/magazin/head/common.png'}
									alt={'img'}
								/>
								<span className={'products-item__name'}>Название 5</span>
							</div>
							<div className={'products-item active'}>
								<img
									className={'products-item__img'}
									src={'https://sibirskylov.ru/img/magazin/head/common.png'}
									alt={'img'}
								/>
								<span className={'products-item__name'}>Название 6</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="products-recomendation">Рекомендованные товары</div>
		</section>
	)
}

export default connect(state => state => ({
	categories: sidebarSelector(state),
}))(ProductsDetail)
