import React from 'react'

import './Error.scss'
import { MessageWrapper } from '../MessageWrapper'

export const Error = ({ title }) => {
	return (
		<MessageWrapper>
			<i className="fab fa-teamspeak error-img"></i>
			{title ? <div className="error-title">{title}</div> : null}
		</MessageWrapper>
	)
}
