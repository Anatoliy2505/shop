import React from 'react'

export const FormItem = ({
	input,
	fieldName = 'input',
	label,
	name,
	meta: { touched, error },
	children,
	...rest
}) => {
	const Field = `${fieldName}`
	return (
		<div className={'auth-form__wrapper'}>
			<label htmlFor={name} className={'auth-form__field-name'}>
				{label}
			</label>
			<Field
				name={name}
				{...input}
				className={`auth-form__field${touched && error ? ' error' : ''}`}
				{...rest}
			/>
			{touched && error && (
				<span className={'auth-text__error'}>
					<i className={'fas fa-exclamation-circle'}></i>
					{error}
				</span>
			)}

			{children}
		</div>
	)
}
