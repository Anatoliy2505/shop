import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, SelectSectGrCol, OptionsList } from '../../../components'

import { useSetToast } from '../../../../../hooks'

export const DeleteProductForm = ({
	rawData,
	getProducts,
	productsState: { products, isLoading, errorMsg },
	resetProducts,
	deleteProduct,
	handleSubmit,
	submitting,
	initialize,
	reset,
	change,
}) => {
	const [collection, setCollection] = useState(null)
	const [productData, setProductData] = useState(null)
	const [isReset, setIsReset] = useState(false)

	const { setToast } = useSetToast()

	useEffect(() => {
		if (collection && collection.products.length > 0) {
			setProductData(null)
			getProducts(collection._id)
		}
		return () => resetProducts()
	}, [collection, getProducts, resetProducts])

	useEffect(() => {
		if (productData) {
			initialize(
				{
					title: productData.title,
					image: productData.image,
				},
				true
			)
		}
	}, [productData, initialize])

	const resetAll = () => {
		setIsReset(true)
		setCollection(null)
		setProductData(null)
		resetProducts()
	}

	const getCollectionData = data => {
		resetProducts()
		setProductData(null)
		setCollection(data)
	}

	const onSelectProduct = event => {
		const id = event.currentTarget.value
		const product = products.find(item => item._id === id)
		setProductData(product)
	}

	const onSubmit = values => {
		const { collectionId, productId, image, title } = values
		deleteProduct({ collectionId, productId, image, title }, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className="form-title">Удалить товар</h2>
			<SelectSectGrCol
				rawData={rawData}
				reset={reset}
				change={change}
				getCollection={getCollectionData}
				resetAll={isReset}
				setIsReset={setIsReset}
			/>
			{products && products.length > 0 && (
				<Field
					fieldName={'select'}
					component={FormItem}
					name={'productId'}
					label={'Выберите продукт для удаленя'}
					onChange={onSelectProduct}
				>
					<option></option>
					<OptionsList groups={products} />
				</Field>
			)}

			{isLoading && <div className={'loading'}>Загрузка товаров...</div>}
			{errorMsg && <div className={'loading'}>{errorMsg}</div>}
			{collection && collection.products.length === 0 && (
				<div className={'loading'}>Товаров в этой коллекции пока нет</div>
			)}
			{productData && (
				<>
					<Field component={FormItem} type={'hidden'} name={'title'} />
					<Field component={FormItem} type={'hidden'} name={'image'} />
					<button type={'submit'} className={'button'} disabled={submitting}>
						Удалить товар
					</button>
				</>
			)}
		</form>
	)
}

export const DeleteProduct = reduxForm({
	form: 'deleteProduct',
})(DeleteProductForm)
