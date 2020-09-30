import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import sidebar from './reducer'
import home from '../pages/Home/redux/reducer'
import news from '../pages/News/redux/reducer'
import catalog from '../pages/Catalog/redux/reducer'
import hits from '../pages/Hits/redux/reducer'
import sale from '../pages/Sale/redux/reducer'
import search from '../pages/Search/redux/reducer'
import auth from '../pages/Auth/redux/reducer'
import collectionDetail from '../pages/ProductsDetail/redux/reducer'
import products from '../pages/Admin/pages/Products/redux/reducer'
import allSlides from '../pages/Admin/pages/Slider/redux/reducer'
import allNews from '../pages/Admin/pages/News/redux/reducer'
import cart from '../pages/Cart/redux/reducer'
import slider from '../pages/Home/components/MainSlider/redux/reducer'
import user from '../pages/User/redux/reducer'

export default combineReducers({
	auth,
	user,
	cart,
	sidebar,
	home,
	slider,
	news,
	catalog,
	hits,
	sale,
	search,
	collectionDetail,
	products,
	allSlides,
	allNews,
	form: formReducer,
})
