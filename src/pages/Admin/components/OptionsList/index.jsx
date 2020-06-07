import React from 'react'

export const OptionsList = ({ groups, prefix = '' }) => {
	return groups.map(item => (
		<React.Fragment key={item.id}>
			<option value={item.id}>
				{prefix}
				{item.title}
			</option>
			{item.children && (
				<OptionsList groups={item.children} prefix={prefix + '– '} />
			)}
		</React.Fragment>
	))
}
