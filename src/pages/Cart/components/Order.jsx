import React, { useEffect, useState } from 'react'
// import { useSetToast } from '../../../hooks/useSetToast'
import { AddressStage } from './AddressStage'
import { UserStage } from './UserStage'
import { DeliveryStage } from './DeliveryStage'

export const Order = ({ user, address, hide, products, sendAnOrder }) => {
	const [state, setState] = useState({
		userData: null,
		addressData: null,
		productsData: null,
	})
	const [stage, setStage] = useState({
		isUserStage: true,
		isAddressStage: false,
		isDeliveryStage: false,
	})

	// const { setToast } = useSetToast()

	useEffect(() => {
		if (products) {
			setState(prevState => ({ ...prevState, productsData: { ...products } }))
		}
	}, [products])

	useEffect(() => {
		if (user) {
			setState(prevState => ({ ...prevState, userData: { ...user } }))
		}
	}, [user])

	useEffect(() => {
		if (address) {
			setState(prevState => ({ ...prevState, addressData: { ...address } }))
		}
	}, [address])

	const toUserStage = () => {
		setStage({
			isUserStage: true,
			isAddressStage: false,
			isDeliveryStage: false,
		})
	}
	const toAddressStage = () => {
		setStage({
			isUserStage: false,
			isAddressStage: true,
			isDeliveryStage: false,
		})
	}
	const toDeliveryStage = () => {
		setStage({
			isUserStage: false,
			isAddressStage: false,
			isDeliveryStage: true,
		})
	}

	const resetAll = () => {
		hide()
	}

	const onSubmit = values => {
		const { userData, addressData, productsData } = state
		const allData = { ...values, userData, addressData, productsData }
		console.log(allData)
		resetAll()
		// sendAnOrder(values, setToast, resetAll)
	}

	return (
		<div className={'form'}>
			<h2 className={'form-title'}>Форма заказа товара</h2>

			<UserStage
				isActive={stage.isUserStage}
				toAddressStage={toAddressStage}
				setState={setState}
				userData={state.userData}
			/>
			<AddressStage
				isActive={stage.isAddressStage}
				toUserStage={toUserStage}
				toDeliveryStage={toDeliveryStage}
				setState={setState}
				addressData={state.addressData}
			/>
			<DeliveryStage
				isActive={stage.isDeliveryStage}
				toAddressStage={toAddressStage}
				state={state}
				onSubmit={onSubmit}
			/>
		</div>
	)
}
