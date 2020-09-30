import React, { useState, useEffect } from 'react'
import { Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'

export const ChoiceCollection = ({
	groups,
	rawData,
	getCollectionData,
	isIsset,
	setIsIsset,
	reset = () => {},
}) => {
	const [collectionList, setCollectionList] = useState(null)

	useEffect(() => {
		if (isIsset) {
			setCollectionList(() => null)
			setIsIsset(false)
		}
	}, [isIsset, setIsIsset])

	const onChoiceGroup = event => {
		const id = event.currentTarget.value
		reset()
		if (!!id) {
			const group = rawData.find(item => item._id === id)
			setCollectionList(() => group.collections)
		} else {
			setCollectionList(() => null)
		}
	}

	const onChoiceCollection = event => {
		const id = event.currentTarget.value
		if (!!id) {
			getCollectionData(collectionList.find(item => item._id === id))
		} else {
			getCollectionData(() => null)
		}
	}

	return (
		<>
			{groups && groups.length > 0 && (
				<>
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'groupId'}
						label={'Выберите раздел'}
						onChange={onChoiceGroup}
					>
						<option></option>
						<OptionsList groups={groups} parentIsDisabled={true} />
					</Field>
					{collectionList && collectionList.length > 0 && (
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
			)}
		</>
	)
}
