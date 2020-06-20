import React, { useState } from 'react'

export const AdminActions = ({
	create: { component: Create, ...createData },
	update: { component: Update, ...updateData },
	delete: { component: Delete, ...deleteData },
	title,
}) => {
	const [actionName, setActionName] = useState('create')

	const isActive = name => {
		return name !== actionName ? ' inactive' : ''
	}

	const choiceForm = () => {
		switch (actionName) {
			case 'create':
				return <Create {...createData} />
			case 'update':
				return <Update {...updateData} />
			case 'delete':
				return <Delete {...deleteData} />
			default:
				return <Create {...createData} />
		}
	}

	return (
		<div className={'groups-page'}>
			<h1 className={'page-title'}>{title}</h1>
			<div className={'wrap-actions__button'}>
				<button
					className={`button${isActive('create')}`}
					onClick={() => setActionName('create')}
				>
					Добавить
				</button>

				<button
					className={`button${isActive('update')}`}
					onClick={() => setActionName('update')}
				>
					Изменить
				</button>

				<button
					className={`button${isActive('delete')}`}
					onClick={() => setActionName('delete')}
				>
					Удалить
				</button>
			</div>
			{choiceForm()}
		</div>
	)
}
