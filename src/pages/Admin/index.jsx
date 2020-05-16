import React from 'react'
import { connect } from 'react-redux'

const Admin = ({ state }) => {
	return (
		<section className={'admin-page'}>
			<div className={'admin-page__section categories-actions'}>
				<h2 className={'categories-actions__title'}>Категории для сайдбара</h2>
				<div>
					<select
						name={'mainCategoriesAction'}
						className={'categories-actions__select'}
					>
						<option value={'change'}>Изменить существующую</option>
						<option value={'add'}>Добавить новую</option>
					</select>
				</div>
			</div>
		</section>
	)
}

export default connect(state => ({
	state,
}))(Admin)
