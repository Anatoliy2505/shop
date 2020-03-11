import { combineReducers } from 'redux'
import sidebar from './reducer'
import news from '../pages/News/redux/reducer'
import home from '../pages/Home/redux/reducer'
import catalog from '../pages/Catalog/redux/reducer'
import hits from '../pages/Hits/redux/reducer'
import sale from '../pages/Sale/redux/reducer'

export default combineReducers({
	sidebar,
	home,
	news,
	catalog,
	hits,
	sale,
})
