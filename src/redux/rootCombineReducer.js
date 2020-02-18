import { combineReducers } from 'redux'
import categories from './reducer'
import news from '../pages/News/redux/reducer'

export default combineReducers({
	categories,
	news,
})
