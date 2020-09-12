import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormItem, OptionsList } from '../../../components'
import { validateChangeGroup as validate } from '../../../../../utils/validators'
import { useSetToast } from '../../../../../hooks'

const FormUpdateGroup = ({
	groups,
	rawData,
	changeGroup,
	handleSubmit,
	submitting,
	valid,
	untouch,
	initialize,
	change,
	reset,
}) => {
	const [categories, setCategories] = useState(rawData || null)
	const [category, setCategory] = useState(null)
	const [isVisibleImage, setIsVisibleImage] = useState(false)
	const { setToast } = useSetToast()

	useEffect(() => {
		if (category) {
			untouch('image')
			if (category.parentId !== '0') {
				change('image', '')
			}
			initialize(
				{
					title: category.title,
					name: category.name,
					parentId: category.parentId,
					image: category.image,
				},
				true
			)
		}
	}, [category, initialize, untouch, change])

	useEffect(() => {
		setCategories(rawData)
		setCategory(category => {
			if (category) return rawData.find(item => item._id === category._id)
		})
	}, [rawData])

	const getTopLavelGroups = () => {
		const topLavelGroups = categories.filter(
			item => item.parentId === '0' && item._id !== category._id
		)
		return topLavelGroups
	}

	const resetAll = () => {
		setCategory(null)
		setIsVisibleImage(false)
		reset()
	}

	const onSubmit = values => {
		const image = 'image' in values ? values.image : ''
		if (
			category.parentId === values['parentId'] &&
			category.title === values['title'] &&
			category.name === values['name'] &&
			category.image === image
		) {
			setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message: 'Измените хотя бы одно поле!',
				},
			})
		} else {
			changeGroup(values, setToast, resetAll)
		}
	}

	const isIssetImage = (id, image) => {
		if (id === '0') {
			setIsVisibleImage(true)
			change('image', image)
		} else {
			setIsVisibleImage(false)
			change('image', '')
		}
	}

	const onChangeCategory = event => {
		const id = event.currentTarget.value
		if (!!id) {
			const group = categories.find(item => item._id === id)
			isIssetImage(group.parentId, group.image)
			setCategory(group)
		} else {
			setCategory(null)
		}
	}

	const onChangeParent = event => {
		const id = event.currentTarget.value
		if (id === '0') {
			setIsVisibleImage(true)
			change('image', category.image)
		} else {
			setIsVisibleImage(false)
			change('image', '')
		}
	}

	return (
		<>
			{categories ? (
				<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
					<h2 className={'form-title'}>Редактировать категорию</h2>
					<Field
						fieldName={'select'}
						component={FormItem}
						name={'categoryId'}
						label={'Выбирите категорию для редактирования'}
						onChange={onChangeCategory}
					>
						<option></option>
						{groups && <OptionsList groups={groups} />}
					</Field>
					{category && (
						<>
							<Field
								fieldName={'select'}
								component={FormItem}
								name={'parentId'}
								label={'Выборать родительскую категрорию'}
								onChange={onChangeParent}
							>
								<option></option>
								<option value={'0'}>Верхний уровень</option>
								{rawData && <OptionsList groups={getTopLavelGroups()} />}
							</Field>
							<Field
								component={FormItem}
								type={'text'}
								name={'title'}
								label={'Измените название'}
							/>
							<Field
								component={FormItem}
								type={'text'}
								name={'name'}
								label={'Измените название на английском'}
							/>
							{isVisibleImage && (
								<Field
									component={FormItem}
									type={'text'}
									name={'image'}
									label={'Укажите картинку (для верхнего уровня)'}
								/>
							)}

							<button
								type={'submit'}
								className={'button'}
								disabled={submitting || !valid}
							>
								Сохранить изменения
							</button>
						</>
					)}
				</form>
			) : (
				<h2 className={'form-title'}>Добавьте хоть одну категорию</h2>
			)}
		</>
	)
}

export const UpdateGroup = reduxForm({ form: 'updateGroup', validate })(
	FormUpdateGroup
)
