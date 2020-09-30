import React from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { ru } from 'date-fns/locale'
import 'react-datepicker/dist/react-datepicker.css'
import '../../../../components/FormItem/FormItem.scss'
registerLocale('ru', ru)
setDefaultLocale('ru')

export const DatePickerField = ({
	label,
	input: { value, ...restInput },
	name,
	meta: { touched, error },
	...rest
}) => {
	return (
		<>
			{label && (
				<label htmlFor={name} className={'form-label'}>
					{label}
				</label>
			)}
			<DatePicker
				name={name}
				selected={+new Date(value)}
				dateFormat={'dd.MM.yyyy'}
				className={`form-field${touched && error ? ' error' : ''}`}
				{...restInput}
				{...rest}
			/>
			{touched && error && (
				<span className={'error-message'}>
					<i className={'fas fa-exclamation-circle'}></i>
					{error}
				</span>
			)}
		</>
	)
}
