import { REVERB, FORWARD } from '../constants/ActionTypes'

const initialState = {
	position: {
		up: 0,
		down: 0,
		left: 0,
		right: 0
	}
}

let timeline = (state = initialState, action) => {
	
	switch (action.type) {
		case REVERB:
			return Object.assign({}, state, {
				position: action.pastPosition[action.pastPosition.length - 2]
			})
		
		case FORWARD:
			return Object.assign({}, state.position, {
				position: state.pastPosition.pop()
			})

		default:
			return state
	}
}

export default timeline