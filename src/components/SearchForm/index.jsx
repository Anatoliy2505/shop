import React, { useState } from 'react'
import { withRouter } from 'react-router'

import './SearchForm.scss'

const SearchForm = ({ history }) => {
	const [query, setQuery] = useState('')

	const changeInput = e => {
		setQuery(e.currentTarget.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		history.push({
			pathname: '/search',
			query,
		})
		setQuery('')
	}

	return (
		<form onSubmit={handleSubmit} className={'search__form'}>
			<input
				type={'search'}
				name={'query'}
				value={query}
				placeholder={'Найти товары'}
				aria-label={'search'}
				className={'search__form-input'}
				onChange={changeInput}
			/>
			<button className={'search__form-submit'}>
				<i className={'fas fa-search'} />
			</button>
		</form>
	)
}

export default withRouter(SearchForm)
