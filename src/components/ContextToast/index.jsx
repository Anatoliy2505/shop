import React, { useState } from 'react'
import { Context } from '../../context'
import { Toast } from '../Toast'

export const ContextToast = ({ children }) => {
	const [toast, setToast] = useState(null)
	return (
		<Context.Provider value={{ setToast }}>
			{children}
			{toast && (
				<Toast
					data={toast.data}
					position={toast.position}
					autoDelete={toast.autoDelete}
					duration={toast.duration}
				/>
			)}
		</Context.Provider>
	)
}
