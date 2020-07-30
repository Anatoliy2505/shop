import React from 'react'
import './PreviewImg.scss'

export const PreviewImg = ({ file }) => {
	return (
		<div className="wrap-preview">
			<img src={URL.createObjectURL(file)} alt={file.name} />
			<span>Размер - {(file.size / 1024000).toFixed(2)}MB</span>
		</div>
	)
}
