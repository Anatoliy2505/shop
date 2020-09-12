import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, SelectSectGrCol, OptionsList } from '../../../components'
import { validateUpdateProduct as validate } from '../../../../../utils/validators'

import { useSetToast } from '../../../../../hooks'

export const UpdateProductForm = ({
	groups,
	rawData,
	getProducts,
	productsState: { products, isLoading, errorMsg },
	resetProducts,
	changeProduct,
	handleSubmit,
	submitting,
	initialize,
	reset,
	change,
}) => {
	const [collection, setCollection] = useState(null)
	const [productData, setProductData] = useState(null)
	const [isReset, setIsReset] = useState(false)
	const [isVisibleImage, setIsVisibleImage] = useState(false)
	const [choiceParent, setChoiceParent] = useState(false)
	const [collectionList, setCollectionList] = useState(null)

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
			const { image, ...rest } = productData
			initialize(
				{
					isNewImage: false,
					oldImage: image,
					newParentId: null,
					isChoiceParent: false,
					...rest,
				},
				true
			)
		}
	}, [productData, initialize])

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

	const onChoiceGroup = event => {
		const id = event.currentTarget.value
		if (!!id) {
			const parent = rawData.find(item => item._id === id)
			const newCollectionList =
				parent.collections.length > 0
					? parent.collections.filter(item => item._id !== collection._id)
					: []
			setCollectionList(newCollectionList)
		} else {
			setCollectionList(null)
		}
	}

	const onChangeParentId = () => {
		setChoiceParent(!choiceParent)
		setCollectionList(null)
		change('newParentId', null)
		change('newGroupId', null)
	}

	const resetAll = () => {
		resetProducts()
		setCollection(null)
		setProductData(null)
		setIsVisibleImage(false)
		setChoiceParent(false)
		setCollectionList(null)
		setIsReset(true)
		change('newParentId', null)
		change('newGroupId', null)
		change('image', null)
	}

	const onSubmit = values => {
		let { isChoiceParent, newGroupId, groupId, sectionId, ...data } = values
		let isChangeFields = false
		if ('image' in data && !!data.image) {
			const { image } = data
			data.image = image['0']
			isChangeFields = true
		} else if (data.newParentId) {
			isChangeFields = true
		} else {
			for (let key in productData) {
				if (
					key in data &&
					key !== 'image' &&
					String(productData[key]) !== String(data[key])
				) {
					isChangeFields = true
					break
				}
			}
		}

		if (!isChangeFields) {
			setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message: 'Измените хотя бы одно поле!',
				},
			})
			return false
		}
		changeProduct(data, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className="form-title">Изменить товар</h2>
			<SelectSectGrCol
				rawData={rawData}
				reset={reset}
				setIsReset={setIsReset}
				change={change}
				getCollection={getCollectionData}
				resetAll={isReset}
			/>
			{products && (
				<Field
					fieldName={'select'}
					component={FormItem}
					name={'productId'}
					label={'Выберите продукт для изменения'}
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
					<Field
						component={FormItem}
						label={'Измените название товара'}
						name={'title'}
					/>
					<Field
						component={FormItem}
						label={'Измените название на английском'}
						name={'name'}
					/>
					<Field
						component={FormItem}
						label={'Измените цену товара'}
						type={'number'}
						name={'price'}
					/>
					<Field
						component={FormItem}
						type={'number'}
						label={'Укажите цену со скидкой или 0'}
						name={'salePrice'}
					/>
					<Field
						component={FormItem}
						label={'Значение главного параметра'}
						name={'mainParameter'}
					/>
					<Field
						component={FormItem}
						label={'Введите св.-знач./св.-зн./для товара'}
						name={'properties'}
					/>
					<Field
						component={FormItem}
						type={'number'}
						label={'Укажите порядковый номер товара'}
						name={'sort'}
					/>
					<Field
						component={FormItem}
						type={'checkbox'}
						label={'Товар в наличии'}
						name={'isset'}
					/>
					<Field component={'input'} type={'hidden'} name={'oldImage'} />
					<div className={'preview-image'}>
						<img
							src={process.env.PUBLIC_URL + productData.image}
							title={productData.title}
							alt={productData.title}
						/>
					</div>
					<Field
						component={FormItem}
						type={'checkbox'}
						name={'isNewImage'}
						label={'Изменить картинку'}
						onChange={() => {
							setIsVisibleImage(!isVisibleImage)
							change('image', null)
						}}
					/>
					{isVisibleImage && (
						<Field
							component={FormItem}
							type={'file'}
							name={'image'}
							label={'Загрузить новую картинку'}
						/>
					)}
					<Field component={'input'} type={'hidden'} name={'parentId'} />
					<Field
						component={FormItem}
						type={'checkbox'}
						name={'isChoiceParent'}
						label={'Изменить родителя'}
						onChange={onChangeParentId}
					/>
					{choiceParent && (
						<>
							<Field
								fieldName={'select'}
								component={FormItem}
								name={'newGroupId'}
								label={'Выбрать раздел'}
								onChange={onChoiceGroup}
							>
								<option></option>
								<OptionsList groups={groups} parentIsDisabled={true} />
							</Field>
							{collectionList && collectionList.length > 0 ? (
								<Field
									fieldName={'select'}
									component={FormItem}
									name={'newParentId'}
									label={'Выберите родительскую коллекцию'}
								>
									<option></option>
									<OptionsList groups={collectionList} />
								</Field>
							) : collectionList ? (
								<div>Нет коллекций в данной группе...</div>
							) : null}
						</>
					)}
					<button type={'submit'} className={'button'} disabled={submitting}>
						Изменить товар
					</button>
				</>
			)}
		</form>
	)
}

export const UpdateProduct = reduxForm({
	form: 'updateProduct',
	validate,
})(UpdateProductForm)
