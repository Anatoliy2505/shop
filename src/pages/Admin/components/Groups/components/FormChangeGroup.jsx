import React, { useState } from 'react'
import { OptionsList } from '../../OptionsList'

export const FormChangeGroup = ({ groups }) => {
	const [category, changeCategory] = useState(null)
	const handleSubmit = () => {
		return false
	}
	return (
		<form className={'form'} onSubmit={handleSubmit}>
			<h2 className={'form-title'}>Создать категрорию</h2>
			<label htmlFor={'select-category'} className={'form-label'}>
				Выбирите категрорию
			</label>
			<select name={'select-category'} className={'form-field'}>
				{groups && <OptionsList groups={groups} />}
			</select>
			<label htmlFor={'select-parent'} className={'form-label'}>
				Изменить родительскую категрорию
			</label>
			<select name={'select-parent'} className={'form-field'}>
				<option value={'0'}>Верхний уровень</option>
				{groups && <OptionsList groups={groups} />}
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
