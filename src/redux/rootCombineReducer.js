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

export default combineReducers({
	auth,
	sidebar,
	home,
	news,
	catalog,
	hits,
	sale,
	search,
	form: formReducer,
})
