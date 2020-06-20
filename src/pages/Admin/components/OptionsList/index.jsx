import React from 'react'

export const OptionsList = ({ groups, prefix = '' }) => {
	return groups.map(item => (
		<React.Fragment key={item._id}>
			<option value={item._id}>
				{prefix}
				{item.title}
			</option>
			{item.children && (
				<OptionsList groups={item.children} prefix={prefix + '– '} />
			)}
		</React.Fragment>
	))
}
