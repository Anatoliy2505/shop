import React from 'react'

import './Empty.scss'

import { MessageWrapper } from '../MessageWrapper'

export const Empty = ({ title }) => {
	return (
		<MessageWrapper>
			<i className="far fa-folder-open empty-img"></i>
			{title ? <div className="empty-title"> {title}</div> : null}
		</MessageWrapper>
	)
}
