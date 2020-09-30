import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './NewsListItem.scss'

export const NewsListItem = ({ name, title, date, image, litleDesc }) => {
	return (
		<Link
			to={`/news/${name}`}
			className={'news-item'}
			title={'Перейти к новости'}
		>
			<div className={'news-item__inner'}>
				<div className={'news-item__img'}>
					<img src={process.env.PUBLIC_URL + image} alt={title} />
				</div>
				<h3 className={'news-item__title'}>{title}</h3>
				<div className={'news-item__desc'}>{litleDesc}</div>
				<div className={'news-item__date'}>{format(date, 'DD.MM.YYYY')} г.</div>
			</div>
		</Link>
	)
}

NewsListItem.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	litleDesc: PropTypes.string.isRequired,
}
