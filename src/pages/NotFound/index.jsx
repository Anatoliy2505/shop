import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.scss'

export const NotFound = () => {
	return (
		<section className={'not-found__page'}>
			<div className={'not-found__container'}>
				<h1 className={'not-found__title'}>404</h1>
				<p className={'not-found__description'}>
					Извините, но страница не найдена
				</p>
				<Link to={'/'} className={'not-found__link'}>
					Вернуться на главную
				</Link>
			</div>
		</section>
	)
}
