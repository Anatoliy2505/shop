import React from 'react'
import { BreadCrumbs } from '../../components'

import './Search.scss'

const Search = ({ history, location: { query } }) => {
	console.log(history)
	return (
		<div className={'search-page'}>
			<BreadCrumbs lastElementName={'Поисковая страница'} />
			<h1 className={'page-title'}>Поисковая страница</h1>
			<div>
				{query ? (
					<h2>Вы ищите: {query}</h2>
				) : (
					<h2>Введите в поисковую строку название необходимого товара!</h2>
				)}
			</div>
		</div>
	)
}

export { Search }
