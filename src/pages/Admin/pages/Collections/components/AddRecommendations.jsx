import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'
import { validateAddRecommendations as validate } from '../../../../../utils/validators'
import { ChoiceCollection } from './ChoiceCollection'
import { useSetToast } from '../../../../../hooks'

export const AddRecommendationsForm = ({
	rawData,
	addRecommendations,
	allCollections,
	groups,
	submitting,
	handleSubmit,
	change,
	untouch,
	valid,
	reset,
}) => {
	const [collectionData, setCollectionData] = useState(null)
	const [collectionsList, setCollectionsList] = useState([])
	const [isIsset, setIsIsset] = useState(false)

	const { setToast } = useSetToast()

	const changeParentCollection = data => {
		change('parentsIds', [])
		change('collectionsIds', [])
		untouch('parentsIds')
		untouch('collectionsIds')
		setCollectionsList(() => [])
		setCollectionData(() => data)
	}

	const resetChange = () => {
		reset()
		setCollectionsList(() => [])
		setCollectionData(() => null)
	}

	const resetAll = () => {
		resetChange()
		setIsIsset(true)
	}

	const onChoiceGroup = event => {
		const values = Array.from(
			event.currentTarget.selectedOptions,
			option => option.value
		)
		let collections = []
		collections = allCollections.filter(
			item =>
				values.includes(item.parentId) &&
				item._id !== collectionData._id &&
				!collectionData.recommendation.includes(item._id)
		)
		change('collectionsIds', [])
		setCollectionsList(collections)
	}

	const onSubmit = values => {
		const { collectionId, collectionsIds } = values
		addRecommendations(
			{ collectionId, collectionsIds, title: collectionData.title },
			setToast,
			resetAll
		)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<ChoiceCollection
				groups={groups}
				rawData={rawData}
				getCollectionData={changeParentCollection}
				reset={resetChange}
				isIsset={isIsset}
				setIsIsset={setIsIsset}
			/>
			{collectionData && (
				<Field
					fieldName={'select'}
					component={FormItem}
					name={'parentsIds'}
					label={'Выберите родителей'}
					onChange={onChoiceGroup}
					multiple
				>
					<OptionsList groups={groups} parentIsDisabled={true} />
				</Field>
			)}
			{collectionsList.length > 0 && (
				<>
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'collectionsIds'}
						label={'Выберите коллекции для добавления'}
						multiple
					>
						<OptionsList groups={collectionsList} />
					</Field>
					<button
						type={'submit'}
						className={'button'}
						disabled={submitting || !valid}
					>
						Добавить
					</button>
				</>
			)}
		</form>
	)
}

export const AddRecommendations = reduxForm({
	form: 'addRecommendations',
	initialValues: {
		parentsIds: [],
		collectionsIds: [],
	},
	validate,
})(AddRecommendationsForm)
