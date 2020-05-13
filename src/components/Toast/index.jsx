import React, { useState, useEffect, useCallback } from 'react'
import './Toast.scss'

export const Toast = ({
	data: toast,
	position = 'top-right',
	autoDelete = true,
}) => {
	const [list, setList] = useState([])

	useEffect(() => {
		setList(list => [...list, toast])
	}, [toast])

	const deleteToast = useCallback(
		index => {
			list.splice(index, 1)
			setList([...list])
		},
		[list]
	)

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoDelete && list.length) {
				deleteToast(0)
			}
		}, 3000)
		return () => {
			clearInterval(interval)
		}
	}, [autoDelete, deleteToast, list])

	const createToastJsxList = list.map((item, i) => (
		<div
			key={i}
			className={`notification toast ${position} ${item.status || 'info'}`}
		>
			<button onClick={() => deleteToast(i)}>X</button>
			{item.icon && (
				<div className="notification-image">
					<img src={item.icon} alt={'icon'} />
				</div>
			)}
			<div>
				<p className="notification-title">{item.title}</p>
				<p className="notification-message">{item.message}</p>
			</div>
		</div>
	))

	return (
		<>
			{list.length ? (
				<div className={`notification-container ${position}`}>
					{createToastJsxList}
				</div>
			) : null}
		</>
	)
}
