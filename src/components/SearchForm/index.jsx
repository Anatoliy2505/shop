import React from 'react';

import './SearchForm.scss';

const SearchForm = () => {
	return (
		<form className={'search__form'}>
			<input
				type={'search'}
				name={'search'}
				placeholder={'Найти товары'}
				aria-label={'search'}
				className={'search__form-input'}
			/>
			<button type={'submit'} className={'search__form-submit'}>
				<i className={'fas fa-search'} />
			</button>
		</form>
	);
};

export { SearchForm };
