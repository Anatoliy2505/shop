import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { Portal } from '../Portal'

import './Modal.scss'

export const Modal = ({ textButton, classButton = 'button', children }) => {
	const [isShown, setIsShown] = useState(false)
	const show = () => setIsShown(true)
	const hide = () => setIsShown(false)
	return (
		<>
			<button className={classButton} onClick={show}>
				{textButton}
			</button>
			{isShown && (
				<Portal>
					<div className={'modal-window'}>
						<div className={'modal-container'}>
							<span className={'modal-close'} onClick={hide}>
								<i className={'fas fa-times'}></i>
							</span>
							{children}
						</div>
					</div>
				</Portal>
			)}
		</>
	)
}

Modal.propTypes = {
	textButton: PropTypes.string.isRequired,
	classButton: PropTypes.string.isRequired,
}
