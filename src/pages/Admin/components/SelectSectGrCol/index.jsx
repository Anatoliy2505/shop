import React, { useState, useEffect } from 'react'
import { Field } from 'redux-form'
import { FormItem, OptionsList } from '../../components'
import findGroupsWithCollections from '../../../../utils/helpers/findGroupsWithCollections'

export const SelectSectGrCol = ({
	rawData,
	reset,
	change,
	resetAll = false,
	setIsReset,
	getCollection = () => {},
}) => {
	const [sectionList, setSectionList] = useState(null)
	const [groupList, setGroupList] = useState(null)
	const [collectionList, setCollectionList] = useState(null)

	useEffect(() => {
		if (rawData && rawData.length > 0 && !sectionList) {
			setSectionList(rawData.filter(item => item.parentId === '0'))
		}
	}, [rawData, sectionList])

	useEffect(() => {
		if (resetAll) {
			change('sectionId', null)
			setGroupList(null)
			setCollectionList(null)
			setIsReset(false)
		}
	}, [resetAll, change, setIsReset])

	if (!sectionList || sectionList.length === 0) {
		return <h2 className="form-title">Создайте группы и коллекции</h2>
	}

	const parentGroup = findGroupsWithCollections(rawData)

	const onChoiceSection = event => {
		const id = event.currentTarget.value
		reset()
		setCollectionList(null)
		getCollection(null)
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
		getCollection(null)
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
		getCollection(collectionData)
	}

	return (
		<>
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
					label={'Выберите коллекцию'}
					onChange={onChoiceCollection}
				>
					<option></option>
					<OptionsList groups={collectionList} />
				</Field>
			)}
		</>
	)
}
