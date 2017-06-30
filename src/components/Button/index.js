import React, { Component } from 'react';

import './index.css'

class Button extends Component {

	render() {
		return (
			<div className={"Button-container " + this.props.className}>
				<input 
					type="button"
					className="btn"
					value={this.props.icon} 
					onClick={this.props.handleButtonAction} />
			</div>	
		)
	}
}

export default Button;