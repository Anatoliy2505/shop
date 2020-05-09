import React, { useState, useEffect, useCallback } from 'react'
import './Message.scss'
import { Portal } from '../Portal'

export const Message = ({ children, delay, type }) => {
	const [data, setData] = useState(children)
	const [isShown, serIsSown] = useState(true)
	const [timerId, setTimerId] = useState(null)

	const setTimer = useCallback(() => {
		if (timerId) {
			clearTimeout(timerId)
		}
		const timer = setTimeout(() => {
			setData(null)
			serIsSown(false)
		}, delay)
		setTimerId(timer)
	}, [delay, timerId])

	useEffect(() => {
		if (children && data !== children) {
			serIsSown(true)
			setData(children)
			setTimer()
		}
		return () => {
			if (timerId) {
				clearTimeout(timerId)
			}
		}
	}, [children, timerId, data, setTimer])
	console.log(1)
	return (
		<>
			{children && isShown && (
				<Portal>
					<div
						className={`popap-window`}
						onMouseEnter={() => clearTimeout(timerId)}
						onMouseLeave={setTimer}
						style={{ animationDuration: `${+delay - 1000}ms` }}
					>
						<div className={`popap-container ${type}`}>{children}</div>
					</div>
				</Portal>
			)}
		</>
	)
}
