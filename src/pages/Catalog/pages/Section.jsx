import React, { useState, useEffect } from 'react'

import { CategoriesLIst } from '../components/CategoriesLIst'
import { Empty } from '../../../components'

export const Section = ({
	data,
	viewElements,
	setRoutes,
	setTitle,
	title,
	match: {
		params: { section },
	},
}) => {
	const [allCollections, setAllCollections] = useState({})

	useEffect(() => {
		data[section] ? setTitle(data[section].title) : setTitle('Раздел не найден')
		setRoutes(null)
	}, [data, section, setRoutes, setTitle])

	const joinCollections = data => {
		let collections = []
		const children = data.children
		for (let item in children) {
			if (children[item].collections.length > 0)
				collections.push(...children[item].collections)
		}
		setAllCollections(prevState => ({
			...prevState,
			[section]: collections,
		}))
	}

	if (data[section]) {
		!allCollections[section] && joinCollections(data[section])
	}

	return (
		<>
			<h2 className={'page-title'}>{title}</h2>
			{allCollections[section] && allCollections[section].length > 0 ? (
				<CategoriesLIst
					categories={allCollections[section]}
					viewElements={viewElements}
					from={section}
				/>
			) : (
				<Empty title={'Товары не найдены'} />
			)}
		</>
	)
}
