import React, { useState, useEffect, useCallback } from 'react'
import { Portal } from '../Portal'
import './Toast.scss'

export const Toast = ({
	data: toast,
	position = 'top-right',
	autoDelete = true,
	duration = 3000,
	children,
}) => {
	const [list, setList] = useState([])
	const [intervalId, setIntervalId] = useState(null)

	useEffect(() => {
		setList(list => [...list, toast])
	}, [toast])

	const deleteToast = useCallback(index => {
		if (intervalId) {
			clearInterval(intervalId)
		}
		list.splice(index, 1)
		setList([...list])
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoDelete && list.length) {
				deleteToast(0)
			}
		}, duration)
		setIntervalId(interval)
		console.log(interval)
		return () => {
			clearInterval(interval)
		}
	}, [autoDelete, deleteToast, duration, list])

	const createToastJsxList = list.map((item, i) => (
		<div
			key={i}
			className={`notification toast ${position} ${item.status || 'info'}`}
			style={{ animationDuration: `${+duration}ms` }}
		>
			<span className={'notification-button'} onClick={() => deleteToast(i)}>
				<i className={'fas fa-times'}></i>
			</span>
			<div className={'notification-image'}>
				<i
					className={`fas ${
						item.status === 'error'
							? 'fa-exclamation-circle'
							: item.status === 'success'
							? 'fa-check-circle'
							: 'fa-info-circle'
					}`}
				></i>
			</div>
			<div className={'notification-info'}>
				{item.title && <p className="notification-title">{item.title + i}</p>}
				{item.title && <p className="notification-message">{item.message}</p>}
			</div>
		</div>
	))

	return (
		<>
			{list.length ? (
				<Portal>
					<div className={`notification-container ${position}`}>
						{createToastJsxList.reverse()}
						{children}
					</div>
				</Portal>
			) : null}
		</>
	)
}
