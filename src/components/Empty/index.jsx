import React from 'react'
import PropTypes from 'prop-types'

import { MessageWrapper } from '../MessageWrapper'
import './Empty.scss'

export const Empty = ({ title }) => {
	return (
		<MessageWrapper>
			<i className="far fa-folder-open empty-img"></i>
			{title ? <div className="empty-title">{title}</div> : null}
		</MessageWrapper>
	)
}

Empty.propTypes = {
	title: PropTypes.string,
}
