import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'
import { useSetToast } from '../../../../../hooks'

import findGroupsWithCollections from '../../../../../utils/helpers/findGroupsWithCollections'

const DeleteForm = ({
	rawData,
	handleSubmit,
	submitting,
	valid,
	deleteCollection,
	reset,
}) => {
	const [collectionsList, setCollectionsList] = useState(null)
	const { setToast } = useSetToast()

	if (!rawData || rawData.length === 0) {
		return <h2 className="form-title">Создайте группы и коллекции</h2>
	}

	const parentGroup = findGroupsWithCollections(rawData)

	if (!parentGroup || parentGroup.length === 0) {
		return <h2 className="form-title">Пока не создано ни одной коллекции</h2>
	}

	const onChoiceGroup = event => {
		const id = event.currentTarget.value
		if (!!id) {
			const parent = parentGroup.find(item => item._id === id)
			setCollectionsList(parent.collections)
		} else {
			setCollectionsList(null)
		}
	}

	const onSubmit = ({ collectionId }) => {
		const collectionData = collectionsList.find(
			item => item._id === collectionId
		)
		if (!collectionData) {
			return setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message: 'Выберите коллекцию для удаления!',
				},
			})
		}

		const { title, _id, products, parentId, image } = collectionData
		if (products.length > 0) {
			return setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message:
						'Коллекция не пустая, товары из неё необходимо переместить в другую коллекцию!',
				},
			})
		}
		const resetAll = () => {
			reset()
			setCollectionsList(null)
		}

		deleteCollection(
			{ title, collectionId: _id, parentId, image },
			setToast,
			resetAll
		)
	}

	return (
		<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
			<h2 className="form-title">Удалить коллекцию</h2>
			<Field
				fieldName={'select'}
				component={FormItem}
				name={'groupId'}
				label={'Выберите родителя'}
				onChange={onChoiceGroup}
			>
				<option></option>
				{<OptionsList groups={parentGroup} />}
			</Field>
			{collectionsList ? (
				<>
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'collectionId'}
						label={'Выберите коллекцию для удаления'}
					>
						<option></option>
						<OptionsList groups={collectionsList} />
					</Field>

					<button
						tupe={'submit'}
						className={'button'}
						disabled={submitting || !valid}
					>
						Удалить
					</button>
				</>
			) : null}
		</form>
	)
}

export const DeleteCollection = reduxForm({ form: 'deleteCollection' })(
	DeleteForm
)
