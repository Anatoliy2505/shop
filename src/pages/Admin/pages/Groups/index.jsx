import React from 'react'
import { connect } from 'react-redux'

import { CreateGroup, UpdateGroup, DeleteGroup } from './components'
import { sidebarSelector } from '../../../../redux/selectors'
import { setNewGroup, changeGroup, deleteGroup } from './redux/actions'
import { AdminActions } from '../../components'

export const Groups = ({
	groups: { data, rawData },
	setNewGroup,
	changeGroup,
	deleteGroup,
}) => {
	return (
		<>
			<h1 className={'page-title'}>Категории для каталога</h1>
			<AdminActions
				create={{ component: CreateGroup, groups: data, setNewGroup }}
				update={{
					component: UpdateGroup,
					groups: data,
					rawData,
					changeGroup,
				}}
				delete={{
					component: DeleteGroup,
					groups: data,
					rawData,
					deleteGroup,
				}}
			/>
		</>
	)
}

export default connect(
	state => ({
		groups: sidebarSelector(state),
	}),
	{ setNewGroup, changeGroup, deleteGroup }
)(Groups)
