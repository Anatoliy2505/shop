import React, { useState } from 'react'

import './Groups.scss'

const CreateForm = ({ categories = [] }) => {
	const handleSubmit = () => {
		return false
	}
	return (
		<form className={'form'} onSubmit={handleSubmit}>
			<h2 className={'form-title'}>Создать категрорию</h2>
			<label htmlFor={'select-parent'} className={'form-label'}>
				Выбирите родительскую категрорию
			</label>
			<select name={'select-parent'} className={'form-field'}>
				<option value={'0'}>Верхний уровень</option>
				{categories.length
					? categories.map(cat => <option value={cat._id}>{cat.title}</option>)
					: null}
			</select>
			<label htmlFor={'category-title'} className={'form-label'}>
				Введите название
			</label>
			<input type={'text'} name={'category-title'} className={'form-field'} />
			<label htmlFor={'category-name'} className={'form-label'}>
				Введите название на английском
			</label>
			<input type={'text'} name={'category-name'} className={'form-field'} />
			<button type={'subbmit'} className={'button'}>
				Добавить
			</button>
		</form>
	)
}

const ChangeForm = ({ categories = [] }) => {
	const [category, changeCategory] = useState(null)
	const handleSubmit = () => {
		return false
	}
	return (
		<form className={'form'} onSubmit={handleSubmit}>
			<h2 className={'form-title'}>Создать категрорию</h2>
			<label htmlFor={'select-parent'} className={'form-label'}>
				Выбирите родительскую категрорию
			</label>
			<select name={'select-parent'} className={'form-field'}>
				{categories.length
					? categories.map(cat => <option value={cat._id}>{cat.title}</option>)
					: null}
			</select>
			<label htmlFor={'category-title'} className={'form-label'}>
				Измените название
			</label>
			<input type={'text'} name={'category-title'} className={'form-field'} />
			<label htmlFor={'category-name'} className={'form-label'}>
				Измените название на английском
			</label>
			<input type={'text'} name={'category-name'} className={'form-field'} />
			<button type={'subbmit'} className={'button'}>
				Сохранить изменения
			</button>
		</form>
	)
}

export const Groups = () => {
	const [actionName, setActionName] = useState('create')
	const isActive = name => {
		return name !== actionName ? ' inactive' : ''
	}
	const choiceForm = () => {
		if (actionName === 'create') {
			return <CreateForm categories={[]} />
		} else {
			return <ChangeForm categories={[]} />
		}
	}
	return (
		<div className={'groups-page'}>
			<h1 className={'page-title'}>Категории для каталога</h1>
			<div className={'wrap-actions__button'}>
				<button
					className={`button${isActive('create')}`}
					onClick={() => setActionName('create')}
				>
					Добавить новую
				</button>
				<button
					className={`button${isActive('apdate')}`}
					onClick={() => setActionName('apdate')}
				>
					Изменить существующую
				</button>
				{choiceForm()}
			</div>
		</div>
	)
}
