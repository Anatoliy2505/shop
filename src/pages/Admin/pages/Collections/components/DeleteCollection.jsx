import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import { SelectSectGrCol } from '../../../components'
import { useSetToast } from '../../../../../hooks'

const DeleteForm = ({
	rawData,
	handleSubmit,
	submitting,
	valid,
	deleteCollection,
	change,
	reset,
}) => {
	const [collection, setCollection] = useState(null)
	const [isReset, setIsReset] = useState(false)
	const { setToast } = useSetToast()

	if (!rawData || rawData.length === 0) {
		return <h2 className="form-title">Создайте группы и коллекции</h2>
	}

	const onSubmit = () => {
		if (!collection) {
			return setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message: 'Выберите коллекцию для удаления!',
				},
			})
		}

		const { title, _id, products, parentId, image } = collection
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
			setIsReset(true)
			setCollection(null)
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
			<SelectSectGrCol
				rawData={rawData}
				reset={reset}
				change={change}
				resetAll={isReset}
				getCollection={setCollection}
				setIsReset={setIsReset}
			/>

			{collection ? (
				<button
					type={'submit'}
					className={'button'}
					disabled={submitting || !valid}
				>
					Удалить
				</button>
			) : null}
		</form>
	)
}

export const DeleteCollection = reduxForm({ form: 'deleteCollection' })(
	DeleteForm
)
