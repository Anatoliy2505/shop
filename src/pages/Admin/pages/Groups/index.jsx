import React, { useState } from 'react'
import { connect } from 'react-redux'

import { FormCreateGroup, FormChangeGroup } from './components'
import { sidebarSelector } from '../../../../redux/selectors'

import './Groups.scss'

export const Groups = ({ groups: { data } }) => {
	const [actionName, setActionName] = useState('create')

	const isActive = name => {
		return name !== actionName ? ' inactive' : ''
	}

	const choiceForm = () => {
		if (actionName === 'create') {
			return <FormCreateGroup groups={data} />
		} else {
			return <FormChangeGroup groups={data} />
		}
	}

	return (
		<div className={'groups-page'}>
			<h1 className={'page-title'}>Категории для каталога</h1>
			<div className={'wrap-actions__button'}>
				<button
					className={`button${isActive('create')}`}
					onClick={() => setActionName('create')}
				>
					Добавить новую
				</button>
				<button
					className={`button${isActive('apdate')}`}
					onClick={() => setActionName('apdate')}
				>
					Изменить существующую
				</button>

				{choiceForm()}
			</div>
		</div>
	)
}

export default connect(
	state => ({
		groups: sidebarSelector(state),
	}),
	null
)(Groups)
