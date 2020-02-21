import React from 'react'

export const VkPostsItem = ({ text, date, attachments }) => {
	const textPrepare = text => {
		return text.split('\n').map(item => <div key={item}>{item}</div>)
	}

	const monthPrepare = month => (month.length === 1 ? '0' + month : month)

	const datePrepare = s => {
		const date = new Date(s * 1000)
		return (
			date.getDate() +
			'.' +
			monthPrepare(date.getMonth() + 1 + '') +
			'.' +
			date.getFullYear()
		)
	}

	return (
		<>
			<li className="posts__item">
				{text ? textPrepare(text) : null} {datePrepare(date)}
			</li>
		</>
	)
}
