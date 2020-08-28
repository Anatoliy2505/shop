import React from 'react'
import { connect } from 'react-redux'

import { AdminActions } from '../../components'
import {
	UpdateCollection,
	DeleteCollection,
	CreateCollection,
} from './components'

import {
	setNewCollection,
	deleteCollection,
	changeCollection,
} from './redux/actions'
import { sidebarSelector } from '../../../../redux/selectors'

import './Collections.scss'

export const Collections = ({
	groups: { data, rawData },
	setNewCollection,
	deleteCollection,
	changeCollection,
}) => {
	return (
		<>
			<h1 className={'page-title'}>Коллекции продуктов</h1>
			<AdminActions
				create={{
					component: CreateCollection,
					rawData,
					setNewCollection,
				}}
				update={{
					component: UpdateCollection,
					groups: data,
					rawData,
					changeCollection,
				}}
				delete={{
					component: DeleteCollection,
					groups: data,
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
	{ setNewCollection, deleteCollection, changeCollection }
)(Collections)
