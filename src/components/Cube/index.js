import React, { Component } from 'react';
import { connect } from 'react-redux';

import CubeLines from '../CubeLines'

import './index.css'

class Button extends Component {

	render() {
		console.log(this.props.position)
		return (
			<div className="Cube-holder">
				<div className="cube-wrapper">
					<div 
						className="cube" 
						style={{ transform: 'rotateX(' + this.props.position.up + 'deg) rotateY(' + this.props.position.right + 'deg) rotateX(' + this.props.position.down + 'deg) rotateY(' + this.props.position.left + 'deg)' }}>
						<div className="face one"><CubeLines/></div>
						<div className="face two"><CubeLines/></div>
						<div className="face three"><CubeLines/></div>
						<div className="face four"><CubeLines/></div>
						<div className="face five"><CubeLines/></div>
						<div className="face six"><CubeLines/></div>
					</div>
				</div>	
			</div>
		)
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

export default connect(
	mapStateToProps,
)(Button);