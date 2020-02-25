import React from 'react'

export const NewsItem = ({ date, title, desc, imgPath }) => {
	return (
		<>
			<img src={imgPath} alt={title} />
			<h1 className={'news-item__title'}>{title}</h1>
			<p className={'news-item__desc'}>{desc}</p>
			<p className={'news-item__date'}>{date}</p>
		</>
	)
}
