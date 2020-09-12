import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, SelectSectGrCol } from '../../../components'
import { validateCreateProduct as validate } from '../../../../../utils/validators'

import { useSetToast } from '../../../../../hooks'

export const CreateProductForm = ({
	rawData,
	setNewProduct,
	handleSubmit,
	submitting,
	valid,
	reset,
	change,
}) => {
	const [collection, setCollection] = useState(null)
	const [isReset, setIsReset] = useState(false)
	const { setToast } = useSetToast()

	useEffect(() => {
		if (!collection) {
			setIsReset(false)
		}
	}, [collection])

	const resetAll = () => {
		setCollection(null)
		setIsReset(true)
	}

	const onSubmit = values => {
		const { image, ...newData } = values
		newData.image = image['0']
		setNewProduct(newData, setToast, resetAll)
	}

	return (
		<form
			className={'form'}
			onSubmit={handleSubmit(onSubmit)}
			encType={'multipart/form-data'}
		>
			<h2 className="form-title">Создать товар</h2>
			<SelectSectGrCol
				rawData={rawData}
				reset={reset}
				change={change}
				getCollection={setCollection}
				resetAll={isReset}
				setIsReset={setIsReset}
			/>
			{collection && (
				<>
					<Field
						component={FormItem}
						type={'text'}
						name={'title'}
						label={'Введите название товара'}
					/>
					<Field
						component={FormItem}
						type={'text'}
						name={'name'}
						label={'Введите название товара на английском'}
					/>
					<Field
						component={FormItem}
						type={'text'}
						name={'mainParameter'}
						label={'Введите значение главного параметра'}
					/>
					<Field
						component={FormItem}
						type={'number'}
						name={'price'}
						label={'Укажите цену товара'}
					/>
					<Field
						component={FormItem}
						type={'number'}
						name={'salePrice'}
						label={'Цена со скидкой или 0'}
					/>
					<Field
						component={FormItem}
						type={'text'}
						name={'properties'}
						label={'Введите св.-знач./св.-зн./для товара'}
					/>
					<Field
						component={FormItem}
						type={'number'}
						name={'sort'}
						label={'Порядковый номер товара'}
					/>
					<Field
						component={FormItem}
						type={'checkbox'}
						name={'isset'}
						label={'Товар в наличии'}
					/>
					<Field
						component={FormItem}
						type={'file'}
						name={'image'}
						label={'Загрузите картинку'}
					/>
					<button
						type={'submit'}
						className={'button'}
						disabled={submitting || !valid}
					>
						Добавить товар
					</button>
				</>
			)}
		</form>
	)
}

export const CreateProduct = reduxForm({
	form: 'createProduct',
	initialValues: {
		sort: 999,
		salePrice: 0,
		isset: true,
	},
	validate,
})(CreateProductForm)
