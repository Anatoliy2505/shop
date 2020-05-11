import React from 'react'

export const FormItem = ({
	fieldName = 'input',
	type,
	label,
	name,
	meta: { touched, error, warning },
	children,
	...rest
}) => {
	const Field = `${fieldName}`
	return (
		<div className={'auth-form__wrapper'}>
			<label htmlFor={name} className={'auth-form__field-name'}>
				{label}
			</label>
			<Field {...rest} type={type} name={name} className={'auth-form__field'} />
			{touched &&
				((error && <span>{error}</span>) ||
					(warning && <span>{warning}</span>))}

			{children}
		</div>
	)
}
