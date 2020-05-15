import React, { useState, useEffect, useCallback } from 'react'
import { Portal } from '../Portal'
import './Toast.scss'

export const Toast = ({
	data: toast,
	position = 'top-right',
	autoDelete = true,
	duration = 3000,
}) => {
	const [list, setList] = useState([])
	const [, setIntervalId] = useState(null)

	useEffect(() => {
		setList(list => [...list, toast])
	}, [toast])

	const deleteToast = useCallback(index => {
		setList(list => {
			list.splice(index, 1)
			return [...list]
		})
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoDelete && list.length) {
				deleteToast(0)
			}
		}, duration)
		setIntervalId(intervalId => {
			clearInterval(intervalId)
			return interval
		})
		return () => {
			clearInterval(interval)
		}
	}, [autoDelete, deleteToast, duration, list])

	const createToastJsxList = list.map((item, i) => (
		<div
			key={i}
			className={`notification toast ${position}${autoDelete &&
				'-hide'} ${item.type || 'info'}`}
			style={{ animationDuration: `${+duration}ms` }}
		>
			<span className={'notification-button'} onClick={() => deleteToast(i)}>
				<i className={'fas fa-times'}></i>
			</span>
			<div className={'notification-image'}>
				<i
					className={`fas ${
						item.type === 'error'
							? 'fa-exclamation-circle'
							: item.type === 'success'
							? 'fa-check-circle'
							: 'fa-info-circle'
					}`}
				></i>
			</div>
			<div className={'notification-info'}>
				{item.title && <p className="notification-title">{item.title}</p>}
				{item.message && <p className="notification-message">{item.message}</p>}
				{item.html ? item.html : null}
			</div>
		</div>
	))

	return (
		<>
			{list.length ? (
				<Portal>
					<div className={`notification-container ${position}`}>
						{createToastJsxList.reverse()}
					</div>
				</Portal>
			) : null}
		</>
	)
}
