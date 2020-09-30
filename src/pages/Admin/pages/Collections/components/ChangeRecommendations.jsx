import React, { useState, useEffect } from 'react'
import { AddRecommendations } from './AddRecommendations'
import { DeleteRecommendations } from './DeleteRecommendations'

export const ChangeRecommendations = ({
	rawData,
	groups,
	deleteRecommendations,
	addRecommendations,
}) => {
	const [allCollections, setAllCollections] = useState(null)
	const [action, setAction] = useState('add')

	useEffect(() => {
		if (!allCollections && rawData && rawData.length > 0) {
			setAllCollections(() => {
				const collections = [...rawData].reduce((accumulator, item) => {
					if (item.collections && item.collections.length > 0) {
						return [...accumulator, ...item.collections]
					}
					return accumulator
				}, [])
				return collections
			})
		}
	}, [rawData, allCollections])

	const isActive = name => {
		return name !== action ? ' inactive' : ''
	}

	const choiceForm = () => {
		switch (action) {
			case 'add':
				return (
					<AddRecommendations
						allCollections={allCollections}
						groups={groups}
						rawData={rawData}
						addRecommendations={addRecommendations}
					/>
				)
			case 'delete':
				return (
					<DeleteRecommendations
						allCollections={allCollections}
						rawData={rawData}
						groups={groups}
						deleteRecommendations={deleteRecommendations}
					/>
				)
			default:
				return (
					<AddRecommendations
						allCollections={allCollections}
						groups={groups}
						rawData={rawData}
					/>
				)
		}
	}

	return (
		<>
			<h2 className="form-title">Работа с рекомендациями</h2>
			<div className="wrap-actions__button recommendations">
				<button
					className={`button${isActive('add')}`}
					onClick={() => setAction('add')}
				>
					Добавить рекомендацию
				</button>

				<button
					className={`button${isActive('delete')}`}
					onClick={() => setAction('delete')}
				>
					Удалить рекомендацию
				</button>
			</div>

			{groups && rawData && rawData.length > 0 ? (
				choiceForm()
			) : (
				<div>Нет данных для работы</div>
			)}
		</>
	)
}
