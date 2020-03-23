import React from 'react'

import loader from './img/loader.gif'
import './Preloader.scss'
import { MessageWrapper } from '../MessageWrapper'

export const Preloader = ({ title }) => {
	return (
		<MessageWrapper>
			<div className="preloader-wrapper__img">
				<img className={'preloader-img'} src={loader} alt={'Загрузка'} />
			</div>
			{title ? <div className="preloader-title">{title}</div> : null}
		</MessageWrapper>
	)
}
