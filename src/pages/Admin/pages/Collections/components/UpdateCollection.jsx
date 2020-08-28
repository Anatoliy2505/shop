import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'

import { useSetToast } from '../../../../../hooks'
import findGroupsWithCollections from '../../../../../utils/helpers/findGroupsWithCollections'
import { getParentList } from '../../../../../utils/helpers/getParentList'

import { validateChangeCollection as validate } from '../../../../../utils/validators'

import '../Collections.scss'

const FormUpdateCollection = ({
	rawData,
	handleSubmit,
	submitting,
	valid,
	changeCollection,
	reset,
	change,
	initialize,
	untouch,
}) => {
	const [sectionList, setSectionList] = useState(null)
	const [groupList, setGroupList] = useState(null)
	const [collectionList, setCollectionList] = useState(null)
	const [collection, setCollection] = useState(null)
	const [isVisibleImage, setIsVisibleImage] = useState(false)
	const [isInitialize, setIsInitialize] = useState(false)

	const { setToast } = useSetToast()

	useEffect(() => {
		if (rawData && rawData.length > 0 && !sectionList) {
			setSectionList(rawData.filter(item => item.parentId === '0'))
		}
	}, [rawData, sectionList])

	useEffect(() => {
		if (collection && !isInitialize) {
			untouch('image')
			change('image', null)
			const {
				name,
				title,
				content,
				price,
				mainParameter,
				sale,
				hit,
				image,
				parentId,
			} = collection
			initialize(
				{
					name,
					title,
					content,
					price,
					mainParameter,
					sale,
					hit,
					parentId,
					isNewImage: false,
					oldImage: image,
				},
				true
			)
			setIsInitialize(true)
		} else if (!collection && isInitialize) {
			setIsInitialize(false)
			setIsVisibleImage(false)
		}
	}, [collection, initialize, untouch, isInitialize, change])

	if (!sectionList || sectionList.length === 0) {
		return <h2 className="form-title">Создайте группы и коллекции</h2>
	}

	const parentGroup = findGroupsWithCollections(rawData)

	const onChoiceSection = event => {
		const id = event.currentTarget.value
		reset()
		setCollectionList(null)
		setCollection(null)
		if (!!id) {
			const list = parentGroup.filter(item => item.parentId === id)
			setGroupList(list && list.length > 0 ? list : null)
		} else {
			setGroupList(null)
		}
	}

	const onChoiceGroup = event => {
		const id = event.currentTarget.value
		change('collectionId', null)
		setCollection(null)
		if (!!id) {
			const parent = parentGroup.find(item => item._id === id)
			setCollectionList(parent.collections)
		} else {
			setCollectionList(null)
		}
	}

	const onChoiceCollection = event => {
		const id = event.currentTarget.value
		const collectionData = collectionList.find(item => item._id === id)
		setCollection(collectionData)
		setIsInitialize(false)
	}

	const resetAll = () => {
		reset()
		setGroupList(null)
		setCollectionList(null)
		setCollection(null)
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
			<Field
				fieldName={'select'}
				component={FormItem}
				name={'sectionId'}
				label={'Выберите раздел'}
				onChange={onChoiceSection}
			>
				<option></option>
				{<OptionsList groups={sectionList} />}
			</Field>
			{groupList && (
				<Field
					fieldName={'select'}
					component={FormItem}
					name={'groupId'}
					label={'Выберите родительскую группу'}
					onChange={onChoiceGroup}
				>
					<option></option>
					{<OptionsList groups={groupList} />}
				</Field>
			)}

			{collectionList && (
				<Field
					fieldName={'select'}
					component={FormItem}
					name={'collectionId'}
					label={'Выберите коллекцию для изменения'}
					onChange={onChoiceCollection}
				>
					<option></option>
					<OptionsList groups={collectionList} />
				</Field>
			)}
			{collection && (
				<>
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'parentId'}
						label={'Измените родительскую группу'}
					>
						<option></option>
						<OptionsList groups={getParentList(rawData)} />
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
						type={'text'}
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
						tupe={'submit'}
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
