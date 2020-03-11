import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { sidebarSelector } from '../../../../redux/selectors'
import { getAllMainCategories } from '../../../../redux/actions'

const CatalogTree = ({
	sidebar: { data, isLoading, errorMsg },
	getAllMainCategories,
}) => {
	const [activeItem, setActiveItem] = useState(null)

	useEffect(() => {
		if (!data) getAllMainCategories()
	}, [data, getAllMainCategories])

	const onSelectItem = e => {
		const id = Number(e.target.dataset.id)
		activeItem === id ? setActiveItem(null) : setActiveItem(id)
	}

	const createTree = (data, itemId, cb) => {
		return data.map(item => {
			return (
				<li
					key={item.id}
					className={
						'sidebar-catalog__parent ' + (itemId === item.id ? 'active' : '')
					}
				>
					<div className={'sidebar-catalog__parent-wrap'}>
						<Link className={'sidebar-catalog__item'} to={'/' + item.name}>
							<span
								className={'sidebar-catalog__parent-img'}
								style={{ backgroundPosition: item.bg_position }}
							/>
							{item.title}
						</Link>
						<span
							className={'sidebar-catalog__parent-open'}
							data-id={item.id}
							onClick={cb}
						/>
					</div>
					<ul className={'sidebar-catalog__children-list'}>
						{item.children.map(childrenItem => {
							return (
								<li key={childrenItem.id}>
									<Link
										className={'sidebar-catalog__children-item'}
										to={`/${item.name}/${childrenItem.name}`}
									>
										{childrenItem.title}
									</Link>
								</li>
							)
						})}
					</ul>
				</li>
			)
		})
	}

	return (
		<nav className={'sidebar-catalog'}>
			<h2 className={'sidebar-catalog__title'}>
				<span className={'sidebar-catalog__title-text'}>Каталог товаров</span>
				<span className={'sidebar-catalog__title-button'}>
					<i className={'fas fa-bars float-right'} />
				</span>
			</h2>
			{isLoading ? (
				<h3 className={'loading'}>Loading...</h3>
			) : data ? (
				<ul className={'sidebar-catalog__list'}>
					{createTree(data, activeItem, onSelectItem)}
				</ul>
			) : errorMsg ? (
				<h3 className={'error'}>{errorMsg}</h3>
			) : (
				<div>Empty</div>
			)}
		</nav>
	)
}

export default connect(
	state => ({
		sidebar: sidebarSelector(state),
	}),
	{ getAllMainCategories }
)(CatalogTree)
