import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../Button'

import * as actions from './../../actions';

import './../../styles/main.css'
import './index.css'

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			speed: 20
		}
		
		window.addEventListener('keydown', (e) => {
			switch (e.keyCode) {
				case 37:
					this.moveLeft(this.state.speed)
					break;
				case 38:
					this.moveRight(this.state.speed)
					break;
				case 39:
					this.moveUp(this.state.speed)
					break;
				case 40:
					this.moveDown(this.state.speed)
					break;
				default:
					break;

			}
		})
	}

	moveUp(steps) { this.props.actions.moveUp(steps) }

	moveDown(steps) { this.props.actions.moveDown(steps) }

	moveLeft(steps) { this.props.actions.moveLeft(steps) }

	moveRight(steps) { this.props.actions.moveRight(steps) }

	render() {
		return (
			<div className="Button-holder">
				<Button 
					icon = '+'
					className = "top"
					handleButtonAction={() => this.moveUp(this.state.speed)}/>
				<Button 
					icon = '-'
					className = "bottom"
					handleButtonAction={() => this.moveDown(this.state.speed)}/> 
				<Button 
					icon = '+'
					className = "left"
					handleButtonAction={() => this.moveLeft(this.state.speed)}/>
				<Button 
					icon = '-'
					className = "right"
					handleButtonAction={() => this.moveRight(this.state.speed)}/>    
			</div>
		);
	}
}

const mapStateToProps = state => ({
	position: {
		up: state.controls.position.up,
		down: state.controls.position.down,
		left: state.controls.position.left,
		right: state.controls.position.right
	}
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
