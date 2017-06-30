import { combineReducers } from 'redux'

import timeline from './timeline'
import controls from './controls'

const rootReducer = combineReducers({
	controls,
	timeline
})

export default rootReducer