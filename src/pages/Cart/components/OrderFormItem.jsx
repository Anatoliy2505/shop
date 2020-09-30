import React from 'react'

export const OrderFormItem = ({
	value,
	name,
	label,
	error,
	touched,
	children,
	fieldName = 'input',
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
