import React from 'react'

import './MessageWrapper.scss'

export const MessageWrapper = ({ children }) => {
	return (
		<div className="wrapper">
			<div className="wrapper-content">{children ? children : null}</div>
		</div>
	)
}
