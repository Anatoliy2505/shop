import React from 'react'

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
	return (
		<>
			{label && (
				<label htmlFor={name} className={'form-label'}>
					{label}
				</label>
			)}
			<Field
				name={name}
				{...input}
				className={`form-field${touched && error ? ' error' : ''}`}
				{...rest}
			>
				{children}
			</Field>
			{touched && error && (
				<span className={'error-message'}>
					<i className={'fas fa-exclamation-circle'}></i>
					{error}
				</span>
			)}
		</>
	)
}
