import React from 'react'
import './FormItem.scss'
import { PreviewImg } from '../PreviewImg'

export const FormItem = ({
	fieldName = 'input',
	label,
	input,
	name,
	meta: { touched, error },
	children,
	...rest
}) => {
	const Field = `${fieldName}`
	const { value, ...restInput } = input
	const { type } = rest
	return (
		<>
			{label && (
				<label htmlFor={name} className={'form-label'}>
					{label}
				</label>
			)}
			{type === 'file' ? (
				<>
					<input
						name={name}
						{...restInput}
						className={`form-field`}
						accept={'.jpg, .png, .jpeg, .gif'}
						{...rest}
					/>
					{value && value.length > 0 && <PreviewImg file={value['0']} />}
				</>
			) : (
				<Field
					name={name}
					{...input}
					className={`form-field${touched && error ? ' error' : ''}`}
					{...rest}
				>
					{children}
				</Field>
			)}
			{touched && error && (
				<span className={'error-message'}>
					<i className={'fas fa-exclamation-circle'}></i>
					{error}
				</span>
			)}
		</>
	)
}
