import React from 'react'
import { connect } from 'react-redux'
import { userSelector } from '../Auth/redux/selectors'

const User = ({ user: { name, surname } }) => {
	return (
		<section className={'user-page'}>
			<h2 className={'user-title'}>{surname ? `${surname} ${name}` : name}</h2>
		</section>
	)
}

export default connect(state => ({
	user: userSelector(state),
}))(User)
