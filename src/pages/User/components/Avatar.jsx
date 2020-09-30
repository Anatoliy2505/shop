import React from 'react'

export const Avatar = ({ avatar, name }) => {
	return (
		<div className={'person-img__wrap'}>
			<img
				src={
					process.env.PUBLIC_URL +
					(avatar ? avatar : '/images/avatars/incognito.jpg')
				}
				alt={'аватар'}
				title={name}
			/>
		</div>
	)
}
