import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList, SelectSectGrCol } from '../../../components'

import { useSetToast } from '../../../../../hooks'

import { validateChangeCollection as validate } from '../../../../../utils/validators'

import '../Collections.scss'

const FormUpdateCollection = ({
	groups,
	rawData,
	changeCollection,
	handleSubmit,
	submitting,
	valid,
	reset,
	change,
	initialize,
	untouch,
}) => {
	const [collection, setCollection] = useState(null)
	const [isVisibleImage, setIsVisibleImage] = useState(false)
	const [isInitialize, setIsInitialize] = useState(false)
	const [isReset, setIsReset] = useState(false)

	const { setToast } = useSetToast()

	useEffect(() => {
		if (collection && !isInitialize) {
			untouch('image')
			change('image', null)
			const { image, ...rest } = collection
			initialize(
				{
					isNewImage: false,
					oldImage: image,
					...rest,
				},
				true
			)
			setIsInitialize(true)
		} else if (!collection && isInitialize) {
			setIsInitialize(false)
			setIsVisibleImage(false)
		}
	}, [collection, initialize, untouch, isInitialize, change])

	const getCollection = data => {
		setCollection(data)
		setIsInitialize(false)
	}

	const resetAll = () => {
		reset()
		setIsVisibleImage(null)
		setIsInitialize(null)
		setCollection(null)
		setIsReset(true)
	}

	const onSubmit = value => {
		let data = value
		let isChangeFields = false
		if ('image' in value && !!value.image) {
			const { image, ...newData } = value
			newData.image = image['0']
			data = newData
			isChangeFields = true
		} else {
			for (let key in collection) {
				if (
					key in data &&
					key !== 'image' &&
					String(collection[key]) !== String(data[key])
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
		changeCollection(data, setToast, resetAll)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className="form-title">Изменить коллекцию</h2>
			<SelectSectGrCol
				rawData={rawData}
				reset={reset}
				change={change}
				getCollection={getCollection}
				resetAll={isReset}
				setIsReset={setIsReset}
			/>
			{collection && (
				<>
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'parentId'}
						label={'Измените родительскую группу'}
					>
						<option></option>
						<OptionsList groups={groups} parentIsDisabled={true} />
					</Field>
					<Field
						component={FormItem}
						type={'text'}
						name={'title'}
						label={'Измените название'}
					/>
					<Field
						component={FormItem}
						type={'text'}
						name={'name'}
						label={'Измените название на английском'}
					/>
					<Field
						component={FormItem}
						type={'number'}
						name={'price'}
						label={'Измените цену'}
					/>
					<Field
						component={FormItem}
						type={'text'}
						name={'mainParameter'}
						label={'Измените отличительный параметр'}
					/>
					<Field
						component={FormItem}
						fieldName={'textarea'}
						name={'content'}
						label={'Измените описание коллекции'}
					/>
					<Field
						component={FormItem}
						type={'text'}
						name={'container'}
						label={'Упаковка и количество'}
					/>
					<Field
						component={FormItem}
						type={'text'}
						name={'properties'}
						label={'Измените св.-знач./св.-зн./для коллекции'}
					/>
					<Field
						component={FormItem}
						type={'number'}
						name={'sort'}
						label={'Укажите позицию'}
					/>
					<Field
						component={FormItem}
						type={'checkbox'}
						name={'sale'}
						label={'Есть ли товары со скидкой'}
					/>
					<Field
						component={FormItem}
						type={'checkbox'}
						name={'hit'}
						label={'Это хит продаж'}
					/>
					<Field
						component={FormItem}
						type={'checkbox'}
						name={'isset'}
						label={'Есть товары'}
					/>
					<Field component={'input'} type={'hidden'} name={'oldImage'} />
					<div className={'preview-image'}>
						<img
							src={process.env.PUBLIC_URL + collection.image}
							title={collection.title}
							alt={collection.title}
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

					<button
						type={'submit'}
						className={'button'}
						disabled={submitting || !valid}
					>
						Изменить коллекцию
					</button>
				</>
			)}
		</form>
	)
}

export const UpdateCollection = reduxForm({
	form: 'updateCollection',
	validate,
})(FormUpdateCollection)
