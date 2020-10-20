import React, { useCallback } from 'react'
import './Videos.scss'

export const Videos = ({ videos, isHome = false }) => {
	const getVideosItems = useCallback(() => {
		return videos.map(item => (
			<div key={item._id} className={'videos-item'}>
				<iframe
					src={item.link}
					className={'videos-item__data'}
					frameBorder={'0'}
					allow={
						'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					}
					allowFullScreen={true}
					title={item.title}
				/>
				<h3 className={'videos-item__title'}>{item.title}</h3>
				{!isHome ? (
					<span className={'videos-item__desc'}>{item.description}</span>
				) : null}
			</div>
		))
	}, [videos, isHome])

	return (
		<div className={`videos${isHome ? ' home' : ''}`}>
			{videos && videos.length > 0 ? getVideosItems() : null}
		</div>
	)
}
