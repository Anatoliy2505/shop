import React from 'react'

import './NewsItem.scss'

export const NewsItem = ({ date, title, desc, imgPath }) => {
	return (
		<div className={'news-one'}>
			<img className={'news-one__img'} src={imgPath} alt={title} />
			<h1 className={'news-one__title'}>{title}</h1>
			<p className={'news-one__desc'}>{desc}</p>
			<p className={'news-one__date'}>{date}</p>
		</div>
	)
}
