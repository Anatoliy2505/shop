import { combineReducers } from 'redux'
import categories from './reducer'
import news from '../pages/News/redux/reducer'
import home from '../pages/Home/redux/reducer'

export default combineReducers({
	categories,
	home,
	news,
})
