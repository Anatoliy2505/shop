import React, { useState, useEffect } from 'react'

import { Empty } from '../../../components'
import { CategoriesLIst } from '../components/CategoriesLIst'

export const Group = ({
	data,
	viewElements,
	setRoutes,
	setTitle,
	title,
	match: {
		params: { section, group },
	},
}) => {
	const [collections, setCollection] = useState(null)

	useEffect(() => {
		if (data[section]) {
			setRoutes([{ path: `/catalog/${section}`, title: data[section].title }])
			if (!!data[section].children[group]) {
				const groupData = data[section].children[group]
				setTitle(groupData.title)
				setCollection(groupData.collections)
			} else {
				setTitle('Категория не найдена')
				setCollection(null)
			}
		} else {
			setCollection(null)
			setTitle('Раздел не найден')
			setRoutes(null)
		}
	}, [data, section, group, setTitle, setRoutes])

	return (
		<>
			<h2 className={'page-title'}>{title}</h2>
			{collections && collections.length > 0 ? (
				<CategoriesLIst
					categories={collections}
					viewElements={viewElements}
					from={`${section}/${group}`}
				/>
			) : (
				<Empty title={'Товары не найдены'} />
			)}
		</>
	)
}
