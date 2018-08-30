import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const Form = (props) => {
	return(
		<div className='Form'>
			<form onSubmit={ (e) => props.handleSubmit(e) }>
				<input 
					placeholder='Enter Your Todo Events'
					onChange={ (e) => props.handleChange(e) }
					value={props.inputValue}
				/>
			</form>
		</div>
	);
};

Form.propTypes = { 
	inputValue: PropTypes.any,
	handleChange: PropTypes.any,
	handleSubmit: PropTypes.func
}; 

// class Form extends Component {

// 	static get propTypes() { 
//   	return { 
// 			inputValue: PropTypes.any,
// 			handleChange: PropTypes.any,
// 			handleSubmit: PropTypes.func
// 		}; 
// 	}

// 	render() {
// 		return(
// 			<div className='Form'>
// 				<form onSubmit={ (e) => this.props.handleSubmit(e) }>
// 					<input 
// 						placeholder='Enter Your Todo Events'
// 						onChange={ (e) => this.props.handleChange(e) }
// 						value={this.props.inputValue}
// 					/>
// 				</form>
// 			</div>
// 		);
// 	}
// }

export default Form;