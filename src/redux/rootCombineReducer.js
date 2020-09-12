import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import sidebar from './reducer'
import news from '../pages/News/redux/reducer'
import home from '../pages/Home/redux/reducer'
import catalog from '../pages/Catalog/redux/reducer'
import hits from '../pages/Hits/redux/reducer'
import sale from '../pages/Sale/redux/reducer'
import search from '../pages/Search/redux/reducer'
import auth from '../pages/Auth/redux/reducer'
import collectionDetail from '../pages/ProductsDetail/redux/reducer'
import products from '../pages/Admin/pages/Products/redux/reducer'
import cart from '../pages/Cart/redux/reducer'

export default combineReducers({
	cart,
	auth,
	sidebar,
	home,
	news,
	catalog,
	hits,
	sale,
	search,
	collectionDetail,
	products,
	form: formReducer,
})
