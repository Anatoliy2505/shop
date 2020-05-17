import React from 'react'
import PropTypes from 'prop-types'

import { MessageWrapper } from '../MessageWrapper'
import './Error.scss'

export const Error = ({ title }) => {
	return (
		<MessageWrapper>
			<i className="fab fa-teamspeak error-img"></i>
			{title ? <div className="error-title">{title}</div> : null}
		</MessageWrapper>
	)
}

Error.propTypes = {
	title: PropTypes.string,
}
