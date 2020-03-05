import { combineReducers } from 'redux'
import shop from './reducer'
import news from '../pages/News/redux/reducer'
import home from '../pages/Home/redux/reducer'

export default combineReducers({
	shop,
	home,
	news,
})
