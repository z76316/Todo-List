import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Task = (props) => {
	return(
		<div className='Task'>
			<span style={{ textDecoration: props.todo.done ? 'line-through' : 'none' }}>
				{ props.todo.value }
			</span>
			<button onClick={ () => props.handleClick(props.index)}>{ props.todo.done ? 'Undo' : 'Complete' }</button>
			<button onClick={ () => props.handleRemove(props.index)}>Delete</button>

		</div>
	);
};

Task.propTypes = { 
	index: PropTypes.any,
	todo: PropTypes.any, 
	handleClick: PropTypes.func,
	handleRemove: PropTypes.func
}; 


// class Task extends Component {

// 	static get propTypes() { 
//   	return { 
//   		index: PropTypes.any,
// 			todo: PropTypes.any, 
// 			handleClick: PropTypes.func,
// 			handleRemove: PropTypes.func
// 		}; 
// 	}


// 	render() {
// 		return(
// 			<div className='Task'>
// 				<span style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none' }}>
// 					{ this.props.todo.value }
// 				</span>
// 				<button onClick={ () => this.props.handleClick(this.props.index)}>{ this.props.todo.done ? 'Undo' : 'Complete' }</button>
// 				<button onClick={ () => this.props.handleRemove(this.props.index)}>Delete</button>

// 			</div>
// 		);
// 	}
// }

export default Task;