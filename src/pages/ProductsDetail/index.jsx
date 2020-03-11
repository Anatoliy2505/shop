import React from 'react'
import { connect } from 'react-redux'

const ProductsDetail = () => {
	return (
		<>
			<h1 className={'page-title'}>Detail</h1>
		</>
	)
}

export default connect(state => ({ state }), {})(ProductsDetail)
