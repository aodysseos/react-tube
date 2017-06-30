import * as types from '../constants/ActionTypes'

export const moveUp = (steps) => ({
	type: types.MOVE_UP, 
	position: {
		up: steps,
	}
})

export const moveDown = (steps) => ({
	type: types.MOVE_DOWN, 
	position: {
		down: steps,
	}
})

export const moveLeft = (steps) => ({
	type: types.MOVE_LEFT,
	position: {
		left: steps,
	}
})

export const moveRight = (steps) => ({
	type: types.MOVE_RIGHT,
	position: {
		right: steps,
	}
})

export const reverb = (pastPosition) => ({
	type: types.REVERB,
	pastPosition: pastPosition
})