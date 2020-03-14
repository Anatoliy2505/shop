import React from 'react'
import { connect } from 'react-redux'
import { BreadCrumbs } from '../../components'

const ProductsDetail = () => {
	return (
		<>
			<BreadCrumbs lastElementName={'Товар'} />
			<h1 className={'page-title'}>Detail</h1>
		</>
	)
}

export default connect(state => ({ state }), {})(ProductsDetail)
