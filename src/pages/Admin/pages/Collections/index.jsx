import React from 'react'
import { connect } from 'react-redux'

import { AdminActions } from '../../components'
import {
	UpdateCollectionPage,
	DeleteCollection,
	CreateCollection,
} from './components'

import {
	setNewCollection,
	deleteCollection,
	changeCollection,
	deleteRecommendations,
	addRecommendations,
} from './redux/actions'
import { sidebarSelector } from '../../../../redux/selectors'

import './Collections.scss'

export const Collections = ({
	groups: { data, rawData },
	setNewCollection,
	deleteCollection,
	changeCollection,
	deleteRecommendations,
	addRecommendations,
}) => {
	return (
		<>
			<h1 className={'page-title'}>Коллекции продуктов</h1>
			<AdminActions
				create={{
					component: CreateCollection,
					groups: data,
					rawData,
					setNewCollection,
				}}
				update={{
					component: UpdateCollectionPage,
					groups: data,
					rawData,
					changeCollection,
					deleteRecommendations,
					addRecommendations,
				}}
				delete={{
					component: DeleteCollection,
					rawData,
					deleteCollection,
				}}
			/>
		</>
	)
}

export default connect(
	state => ({
		groups: sidebarSelector(state),
	}),
	{
		setNewCollection,
		deleteCollection,
		changeCollection,
		deleteRecommendations,
		addRecommendations,
	}
)(Collections)
