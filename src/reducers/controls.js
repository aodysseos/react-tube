import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from '../constants/ActionTypes'

const initialState = {
	pastPosition: [],
	position: {
		up: 0,
		down: 0,
		left: 0,
		right: 0
	},
	futurePosition: []	
}

let controls = (state = initialState, action) => {
	
	switch (action.type) {
		case MOVE_UP:
			return Object.assign({}, state, {
				pastPosition: [...state.pastPosition, {'position': state.position} ],
				position: {
					up: state.position.up + action.position.up,
					down: state.position.down,
					left: state.position.left,
					right: state.position.right
				}, 
				futurePosition: []
			})
		
		case MOVE_DOWN:
			return Object.assign({}, state, {
				pastPosition: [...state.pastPosition, {'position': state.position} ],
				position: {
					up: state.position.up,
					down: state.position.down - action.position.down,
					left: state.position.left,
					right: state.position.right
				},
				futurePosition: []  
			})

		case MOVE_LEFT:
			return Object.assign({}, state.position, {
				pastPosition: [...state.pastPosition, {'position': state.position} ],
				position: {
					up: state.position.up,
					down: state.position.down,
					left: state.position.left - action.position.left,
					right: state.position.right
				},
				futurePosition: []
			})
		
		case MOVE_RIGHT:
			return Object.assign({}, state.position, {
				pastPosition: [...state.pastPosition, {'position': state.position} ],
				position: {
					up: state.position.up,
					down: state.position.down,
					left: state.position.left,
					right: state.position.right + action.position.right
				},

			})

		default:
			return state
	}
}

export default controls