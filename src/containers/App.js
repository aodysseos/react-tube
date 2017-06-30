import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Cube from './../components/Cube'

import Button from './../components/Button'
import ButtonHolder from './../components/ButtonHolder'

import * as actions from './../actions';

class App extends Component {

	reverb() {
		this.props.actions.reverb(this.props.pastPosition)
	}

	forward() {
		console.log(this.props)
	}

	render() {
		
		return (
			<div className="App">
				<div className="navigation">
					<Button
						icon="Reverb"
						className = "btn-reverb"
						handleButtonAction={() => this.reverb()} />
					<Button
						icon="Forward"
						className = "btn-forward"
						handleButtonAction={() => this.forward()} />		
				</div>
				<ButtonHolder/>
				<Cube/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	pastPosition: state.controls.pastPosition,
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
