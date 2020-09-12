import React, { useMemo, useState, useCallback, useEffect, useRef } from 'react'
import { Properties, AddProductForm, ProductItem } from '../index'
import { getProperties } from '../../../../utils/helpers/getProperties'

import { CategoriesSlider } from '../../../../components'

export const ViewProducts = ({
	products,
	collection,
	recomendation,
	addProductToCart,
}) => {
	const [productId, setProductId] = useState(null)
	const [productData, setProductData] = useState(null)
	const [productNumber, setProductNumber] = useState(1)
	const [properties, setProperties] = useState(null)
	const oldId = useRef(null)

	useEffect(() => {
		if (products && products.length > 0) {
			setProductData(() => products[0])
			setProductId(prev => {
				oldId.current = prev
				return products[0]._id
			})
		}
	}, [products])

	const newProperties = useMemo(() => {
		if (collection && productData) {
			const newProps = getProperties(
				collection.properties,
				productData.properties
			)
			return newProps
		}
		return null
	}, [productData, collection])

	useEffect(() => {
		setProperties(() => newProperties)
	}, [newProperties])

	const selectProduct = useCallback(
		event => {
			const id = event.currentTarget.dataset.id
			const number = event.currentTarget.dataset.number
			if (!!productId && productId !== id) {
				setProductId(prev => {
					oldId.current = prev
					return id
				})
				setProductData(() => products.find(item => item._id === id))
				setProductNumber(() => number)
			}
		},
		[products, productId]
	)

	const productsItems = useMemo(() => {
		if (products && products.length > 0) {
			const items = products.map((item, index) => (
				<ProductItem
					key={item._id}
					id={item._id}
					productId={productId}
					number={index + 1}
					title={item.title}
					image={item.image}
					selectProduct={selectProduct}
					mainParameter={item.mainParameter}
				/>
			))
			return items
		}
		return null
	}, [productId, products, selectProduct])

	const selectNewProduct = (product, col) => {
		setProductNumber(() => col)
		setProductId(prev => {
			oldId.current = prev
			return product._id
		})
		setProductData(() => product)
	}

	const sliderManager = useCallback(
		(direction = 'next') => {
			return () => {
				const colProducts = products.length
				const number = Number(productNumber)
				if (direction === 'prev') {
					if (number === 1) {
						const product = products[colProducts - 1]
						selectNewProduct(product, colProducts)
					} else {
						const product = products[number - 2]
						selectNewProduct(product, number - 1)
					}
				} else {
					if (number === colProducts) {
						const product = products[0]
						selectNewProduct(product, 1)
					} else {
						const product = products[number]
						selectNewProduct(product, number + 1)
					}
				}
			}
		},
		[products, productNumber]
	)
	const propertiesList = useMemo(() => {
		if (collection && productData) {
			return (
				<Properties
					properties={properties}
					title={productData.title}
					mainFieldTitle={collection.mainParameter}
					mainFieldValue={productData.mainParameter}
					container={collection.container}
					price={productData.price}
					salePrice={productData.salePrice}
				/>
			)
		}
		return null
	}, [properties, productData, collection])

	return (
		<>
			{collection && productData ? (
				<>
					<div className={'products-container'}>
						<div className={'products-section one'}>
							<div className={'products__wrap-img'}>
								{products && products.length > 1 && (
									<>
										<div
											className={'control-button control-button__left'}
											onClick={sliderManager('prev')}
										>
											<i className={'far fa-arrow-alt-circle-left'}></i>
										</div>
										<div
											className={'control-button control-button__right'}
											onClick={sliderManager('next')}
										>
											<i className={'far fa-arrow-alt-circle-right'}></i>
										</div>
									</>
								)}
								<img
									src={process.env.PUBLIC_URL + productData.image}
									alt={productData.title}
								/>
							</div>
							<AddProductForm
								title={productData.title}
								properties={properties}
								addProduct={addProductToCart}
								id={productData._id}
								oldId={oldId}
								price={
									!productData.salePrice
										? productData.price
										: productData.salePrice
								}
								isset={collection.isset ? productData.isset : false}
							/>
						</div>

						<div className="products-section two">
							<h3 className="products-title">Описание:</h3>
							<div className="products-description">{collection.content}</div>

							{propertiesList}

							<h3 className="products-title">
								Выберите {collection.mainParameter}:
							</h3>
							<div className="products-items">
								<div className="products-items__container">{productsItems}</div>
							</div>
						</div>
					</div>
					{recomendation && recomendation.length && (
						<div className="products-recomendation">
							<CategoriesSlider
								categories={recomendation}
								title={'Рекомнедованные товары'}
								href={'/recommendation'}
								page={'recommendation'}
							/>
						</div>
					)}
				</>
			) : null}
		</>
	)
}
