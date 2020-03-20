import React from 'react'

import loader from './img/loader.gif'
import './Preloader.scss'

export const Preloader = ({ title }) => {
	return (
		<div className="preloader">
			<div className="preloader-container">
				<img src={loader} alt={'Загрузка'} />
				{title ? <div className="preloader-title">{title}</div> : null}
			</div>
		</div>
	)
}
