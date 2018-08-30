import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const List = (props) => {
	return(
		<div className='List'>
			{ props.todos.map( (todo, index) => {
				if(props.show === '') {
					return (
						<Task 
							key={index} // key is exclusive to react, we are not allowed to pass it as a property
							index={index}
							todo={todo} 
							handleClick={props.handleClick}
							handleRemove={props.handleRemove}
						/>
					);
				} else if ( todo.done === props.show ) {
					return (
						<Task 
							key={index} // key is exclusive to react, we are not allowed to pass it as a property
							index={index}
							todo={todo} 
							handleClick={props.handleClick}
							handleRemove={props.handleRemove}
						/>
					);
				}		
			})}
		</div>
	);
};

List.propTypes = { 
	show: PropTypes.any,
	todos: PropTypes.array,
	handleClick: PropTypes.func,
	handleRemove: PropTypes.func
}; 


export default List;