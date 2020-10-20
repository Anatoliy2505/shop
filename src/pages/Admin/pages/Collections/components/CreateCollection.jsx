import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { validateCreateCollection as validate } from '../../../../../utils/validators'

import { FormItem, OptionsList } from '../../../components'
import { useSetToast } from '../../../../../hooks'

const CreateForm = ({
	groups,
	handleSubmit,
	submitting,
	valid,
	setNewCollection,
	reset,
}) => {
	const { setToast } = useSetToast()

	const onSubmit = data => {
		const { image, ...newData } = data
		newData.image = image['0']
		setNewCollection(newData, setToast, reset)
	}

	return (
		<form
			className={'form'}
			onSubmit={handleSubmit(onSubmit)}
			encType={'multipart/form-data'}
		>
			<h2 className="form-title">Создать коллекцию</h2>
			<Field
				fieldName={'select'}
				component={FormItem}
				name={'parentId'}
				label={'Выберите родителя'}
			>
				<option></option>
				{groups && <OptionsList groups={groups} parentIsDisabled={true} />}
			</Field>
			<Field
				component={FormItem}
				type={'text'}
				name={'title'}
				label={'Введите название'}
			/>
			<Field
				component={FormItem}
				type={'text'}
				name={'name'}
				label={'Введите название на английском'}
			/>
			<Field
				component={FormItem}
				type={'number'}
				name={'price'}
				label={'Укажите цену'}
			/>
			<Field
				component={FormItem}
				type={'text'}
				name={'mainParameter'}
				label={'Отличительный параметр'}
			/>
			<Field
				component={FormItem}
				fieldName={'textarea'}
				name={'content'}
				label={'Описание коллекции'}
			/>
			<Field
				component={FormItem}
				type={'text'}
				name={'container'}
				label={'Упаковка и количество'}
			/>
			<Field
				component={FormItem}
				type={'text'}
				name={'properties'}
				label={'Введите св.-знач./св.-зн./для коллекции'}
			/>
			<Field
				component={FormItem}
				type={'text'}
				name={'link'}
				label={'Укажите ссылку на видео'}
			/>
			<Field
				component={FormItem}
				type={'number'}
				name={'sort'}
				label={'Укажите позицию'}
			/>
			<Field
				component={FormItem}
				type={'checkbox'}
				name={'sale'}
				label={'Есть ли товары со скидкой'}
			/>
			<Field
				component={FormItem}
				type={'checkbox'}
				name={'hit'}
				label={'Это хит продаж'}
			/>
			<Field
				component={FormItem}
				type={'checkbox'}
				name={'isset'}
				label={'Есть товары'}
			/>
			<Field
				component={FormItem}
				type={'file'}
				name={'image'}
				label={'Загрузите картинку'}
			/>
			<button
				type={'submit'}
				className={'button'}
				disabled={submitting || !valid}
			>
				Добавить
			</button>
		</form>
	)
}

export const CreateCollection = reduxForm({
	form: 'createCollection',
	initialValues: {
		sort: 999,
		isset: true,
	},
	validate,
})(CreateForm)
