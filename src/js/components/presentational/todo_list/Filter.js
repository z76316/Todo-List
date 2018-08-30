import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
	return(
		<div className='Filter'>
			<button onClick={ () => props.handleFilter('')}>All</button>
			<button onClick={ () => props.handleFilter(false)}>Undo</button>
			<button onClick={ () => props.handleFilter(true)}>Complete</button>
		</div>
	);
};

Filter.propTypes = { 
	handleFilter: PropTypes.func,
}; 

// class Filter extends Component {

// 	static get propTypes() { 
//   	return { 
// 			handleFilter: PropTypes.func,
// 		}; 
// 	}


// 	render() {
// 		return(
// 			<div className='Filter'>
// 				<button onClick={ () => this.props.handleFilter('')}>All</button>
// 				<button onClick={ () => this.props.handleFilter(false)}>Undo</button>
// 				<button onClick={ () => this.props.handleFilter(true)}>Complete</button>
// 			</div>
// 		);
// 	}
// }

export default Filter;