import React, { useEffect, useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'
import { validateRemoveRecommendations as validate } from '../../../../../utils/validators'

import { ChoiceCollection } from './ChoiceCollection'
import { useSetToast } from '../../../../../hooks'

export const DeleteRecommendationsForm = ({
	allCollections,
	deleteRecommendations,
	handleSubmit,
	submitting,
	rawData,
	groups,
	untouch,
	change,
	valid,
	reset,
}) => {
	const [collectionData, setCollectionData] = useState(null)
	const [recommendations, setRecommendations] = useState([])
	const [isIsset, setIsIsset] = useState(false)

	const { setToast } = useSetToast()

	useEffect(() => {
		if (
			allCollections &&
			collectionData &&
			collectionData.recommendation.length > 0
		) {
			setRecommendations(() =>
				allCollections.filter(item =>
					collectionData.recommendation.includes(item._id)
				)
			)
		} else {
			setRecommendations([])
		}
	}, [allCollections, collectionData])

	const resetAll = () => {
		reset()
		setIsIsset(true)
		setCollectionData(null)
		setRecommendations([])
	}

	const choiceCollection = data => {
		change('collectionsIds', [])
		untouch('collectionsIds')
		setCollectionData(data)
		setRecommendations([])
	}

	const onSubmit = values => {
		const { collectionsIds, collectionId } = values
		deleteRecommendations(
			{ collectionsIds, collectionId, title: collectionData.title },
			setToast,
			resetAll
		)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<ChoiceCollection
				groups={groups}
				rawData={rawData}
				getCollectionData={choiceCollection}
				resetAll={resetAll}
				isIsset={isIsset}
				setIsIsset={setIsIsset}
			/>
			{recommendations.length > 0 && (
				<>
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'collectionsIds'}
						label={'Выберите коллекции для удаления'}
						multiple
					>
						<OptionsList groups={recommendations} />
					</Field>
					<button
						type={'submit'}
						className={'button'}
						disabled={submitting || !valid}
					>
						Удалить
					</button>
				</>
			)}
		</form>
	)
}

export const DeleteRecommendations = reduxForm({
	form: 'deleteRecommendations',
	initialValues: {
		collectionsIds: [],
	},
	validate,
})(DeleteRecommendationsForm)
