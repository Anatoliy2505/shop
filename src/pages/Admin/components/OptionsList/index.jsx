import React from 'react'

export const OptionsList = ({
	groups,
	prefix = '',
	parentIsDisabled = false,
}) => {
	return groups.map(item => (
		<React.Fragment key={item._id}>
			<option
				value={item._id}
				disabled={parentIsDisabled && item.parentId === '0' ? true : false}
			>
				{prefix}
				{item.title}
			</option>
			{item.children && (
				<OptionsList groups={item.children} prefix={prefix + '– '} />
			)}
		</React.Fragment>
	))
}
