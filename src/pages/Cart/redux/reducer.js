import * as t from './actionTypes'

const initialState = {
	products: localStorage.getItem('products')
		? JSON.parse(localStorage.getItem('products'))
		: {},
	totalCount: localStorage.getItem('totalCount')
		? Number(localStorage.getItem('totalCount'))
		: 0,
	totalPrice: localStorage.getItem('totalPrice')
		? Number(localStorage.getItem('totalPrice'))
		: 0,
	productsIds: localStorage.getItem('productsIds')
		? JSON.parse(localStorage.getItem('productsIds'))
		: [],
	loadedData: false,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.ADD_PRODUCT: {
			let products = { ...state.products }
			const product = action.product
			const productId = product._id
			const newTotalCount = state.totalCount + product.count
			if (productId in products) {
				const oldProduct = products[productId]
				const newCountProduct = oldProduct.count + product.count
				const newProduct = {
					...oldProduct,
					count: newCountProduct,
					price: product.price,
					properties: product.properties,
				}
				products[productId] = newProduct
				const newTotalPrice =
					state.totalPrice -
					oldProduct.count * oldProduct.price +
					newCountProduct * product.price
				localStorage.setItem('products', JSON.stringify(products))
				localStorage.setItem('totalCount', newTotalCount)
				localStorage.setItem('totalPrice', newTotalPrice)
				return {
					...state,
					products,
					totalCount: newTotalCount,
					totalPrice: newTotalPrice,
				}
			}
			products[productId] = product
			const newTotalPrice = state.totalPrice + product.count * product.price
			const newProductsIds = [productId, ...state.productsIds]

			localStorage.setItem('products', JSON.stringify(products))
			localStorage.setItem('productsIds', JSON.stringify(newProductsIds))
			localStorage.setItem('totalCount', newTotalCount)
			localStorage.setItem('totalPrice', newTotalPrice)
			return {
				...state,
				products,
				totalCount: newTotalCount,
				totalPrice: newTotalPrice,
				productsIds: newProductsIds,
			}
		}

		case t.ADD_ONE_PRODUCT: {
			const productId = action.productId
			let products = { ...state.products }
			if (productId in products) {
				const product = products[productId]
				const newProduct = {
					...product,
					count: ++product.count,
				}
				products[productId] = newProduct
				const totalCount = ++state.totalCount
				const totalPrice = state.totalPrice + product.price
				localStorage.setItem('products', JSON.stringify(products))
				localStorage.setItem('totalCount', totalCount)
				localStorage.setItem('totalPrice', totalPrice)
				return {
					...state,
					products,
					totalCount,
					totalPrice,
				}
			}
			return state
		}

		case t.SUBTRACT_ONE_PRODUCT: {
			let products = { ...state.products }
			const productId = action.productId
			if (productId in products) {
				const product = products[productId]
				const newProduct = {
					...product,
					count: --product.count,
				}
				products[productId] = newProduct
				const totalCount = --state.totalCount
				const totalPrice = state.totalPrice - product.price
				localStorage.setItem('products', JSON.stringify(products))
				localStorage.setItem('totalCount', totalCount)
				localStorage.setItem('totalPrice', totalPrice)
				return {
					...state,
					products,
					totalCount,
					totalPrice,
				}
			}
			return state
		}

		case t.REMOVE_PRODUCT: {
			let products = { ...state.products }
			const productId = action.productId
			if (productId in products) {
				if (state.productsIds.length === 1) {
					localStorage.removeItem('products')
					localStorage.removeItem('productsIds')
					localStorage.removeItem('totalCount')
					localStorage.removeItem('totalPrice')
					return {
						products: {},
						totalCount: 0,
						totalPrice: 0,
						productsIds: [],
						loadedData: false,
						isLoading: false,
						errorMsg: null,
					}
				}
				const product = { ...products[productId] }
				delete products[productId]
				const restProductIds = state.productsIds.filter(id => id !== productId)
				const totalCount = state.totalCount - product.count
				const totalPrice = state.totalPrice - product.count * product.price
				localStorage.setItem('products', JSON.stringify(products))
				localStorage.setItem('productsIds', JSON.stringify([...restProductIds]))
				localStorage.setItem('totalCount', totalCount)
				localStorage.setItem('totalPrice', totalPrice)
				return {
					...state,
					products,
					totalCount,
					totalPrice,
					productsIds: [...restProductIds],
				}
			}
			return state
		}

		case t.REMOVE_ALL_PRODUCTS:
			localStorage.removeItem('products')
			localStorage.removeItem('productsIds')
			localStorage.removeItem('totalCount')
			localStorage.removeItem('totalPrice')
			return {
				products: {},
				totalCount: 0,
				totalPrice: 0,
				productsIds: [],
				loadedData: false,
				isLoading: false,
				errorMsg: null,
			}

		case t.GET_PRODUCTS_DATA_REQUEST:
			return {
				...state,
				productsData: null,
				isLoading: true,
				errorMsg: null,
			}
		case t.GET_PRODUCTS_DATA_SUCCESS: {
			let products = { ...state.products }
			let count = state.totalCount
			let sum = state.totalPrice
			const productsData = action.productsData
			const newIds = state.productsIds.filter(id => {
				const item = productsData.find(item => item._id === id)
				const product = products[id]
				if (!item || (item && !item.isset) || (item && !item.parentId.isset)) {
					count -= product.count
					sum -= product.count * product.price
					delete products[id]
					return false
				}
				const { price, title, salePrice, image } = item
				if (Number(salePrice) === 0) {
					if (price !== product.price) {
						sum = sum - product.count * product.price + product.count * price
						products[id].price = price
					}
				} else if (salePrice !== product.price) {
					sum = sum - product.count * product.price + product.count * salePrice
					products[id].price = salePrice
				}
				products[id].title = title
				products[id].image = image
				return true
			})
			localStorage.setItem('products', JSON.stringify(products))
			localStorage.setItem('productsIds', JSON.stringify(newIds))
			localStorage.setItem('totalCount', count)
			localStorage.setItem('totalPrice', sum)
			return {
				...state,
				products,
				totalCount: count,
				totalPrice: sum,
				productsIds: newIds,
				loadedData: true,
				isLoading: false,
			}
		}
		case t.GET_PRODUCTS_DATA_FAILURE:
			return {
				...state,
				loadedData: false,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		case t.RESET_PRODUCTS_DATA:
			return {
				...state,
				loadedData: false,
			}
		case t.SET_PRODUCTS_FROM_ORDER: {
			let totalCount = state.totalCount
			let totalPrice = state.totalPrice
			const productsIds = [...state.productsIds]
			const products = { ...state.products }
			for (const item of action.products) {
				if (item._id in products) {
					products[item._id].count += item.count
				} else {
					productsIds.push(item._id)
					products[item._id] = item
				}
				totalCount += item.count
				totalPrice += item.count * products[item._id].price
			}
			localStorage.setItem('products', JSON.stringify(products))
			localStorage.setItem('productsIds', JSON.stringify(productsIds))
			localStorage.setItem('totalCount', totalCount)
			localStorage.setItem('totalPrice', totalPrice)
			return {
				...state,
				totalCount,
				totalPrice,
				productsIds,
				products,
			}
		}

		default:
			return state
	}
}
