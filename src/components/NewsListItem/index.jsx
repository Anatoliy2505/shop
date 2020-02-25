import React from 'react'
import { Link } from 'react-router-dom'

export const NewsListItem = ({ id, title, date, imgPath, litleDesc }) => {
	return (
		<Link
			to={`/news/${id}`}
			className={'news-item'}
			title={'Перейти к новости'}
		>
			<div className={'news-item__inner'}>
				<div className={'news-item__img'}>
					<img src={imgPath} alt={title} />
				</div>
				<div className={'news-item__desc'}>{litleDesc}</div>
				<div className={'news-item__date'}>{date} г.</div>
			</div>
		</Link>
	)
}
