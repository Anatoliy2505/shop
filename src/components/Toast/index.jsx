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
	const [, setIntervalId] = useState(null)

	useEffect(() => {
		setList(list => [...list, toast])
	}, [toast])

	const deleteToast = index => {
		list.splice(index, 1)
		setList([...list])
	}

	const autoDeleteToast = useCallback(index => {
		deleteToast(index)
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoDelete && list.length) {
				autoDeleteToast(0)
			}
		}, duration)
		setIntervalId(intervalId => {
			clearInterval(intervalId)
			return interval
		})
		return () => {
			clearInterval(interval)
		}
	}, [autoDelete, autoDeleteToast, duration, list])

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
