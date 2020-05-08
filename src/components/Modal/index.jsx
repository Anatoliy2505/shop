import React from 'react'
import { useState } from 'react'

import { Portal } from '../Portal'

import './Modal.scss'

export const Modal = ({ children, textButton, classButton = 'button' }) => {
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
