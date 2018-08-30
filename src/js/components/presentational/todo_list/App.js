import React, { Component } from 'react';

import Form from './Form';
import List from './List';
import Filter from './Filter';

import { createStore } from 'redux';
import store from './Redux.js';

import './css/app.css';

// let store = createStore(Reducer, {
// 	inputValue: '',
// 	todos: [
// 		// { value: 'Clean the kitchen', done: false },
// 		// { value: 'Wash the car', done: true },
// 	],
// 	show: '',
// });

class App extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		// this.state = {
		// 	inputValue: '',
		// 	todos: [
		// 		// { value: 'Clean the kitchen', done: false },
		// 		// { value: 'Wash the car', done: true },
		// 	],
		// 	show: '',
		// };
		// this.handleChange = this.handleChange.bind(this);
	}

	// state = {
	// 	inputValue: '',
	// 	todos: [
	// 		// { value: 'Clean the kitchen', done: false },
	// 		// { value: 'Wash the car', done: true },
	// 	],
	// 	show: '',
	// }

	handleChange = (e) => {
		store.dispatch({
			type: 'HandleChange',
			inputValue: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		store.dispatch({
			type: 'HandleSubmit',
			inputValue: e.target.value
		});
	}
	
	handleClick = (index) => {
		store.dispatch({
			type: 'HandleClick',
			index,
		});
	}

	handleRemove = (index) => {
		store.dispatch({
			type: 'HandleRemove',
			index,
		});
	}

	handleFilter = (show) => {
		store.dispatch({
			type: 'HandleFilter',
			show,
		});
	}

	// handleChange = (e) => {
	// 	this.setState( {inputValue: e.target.value} );
	// }

	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	const newTodo = {
	// 		value: this.state.inputValue,
	// 		done: false
	// 	};
	// 	const todos = this.state.todos;
	// 	todos.push(newTodo);
	// 	this.setState( { todos, inputValue: '' } ); // Before ES6: this.setState(todos: todos);
	// }

	// handleClick = (index) => {
	// 	const todos = this.state.todos;
	// 	todos[index].done = !todos[index].done;
	// 	this.setState( { todos } );
	// }

	// handleRemove = (index) => {
	// 	const todos = this.state.todos;
	// 	todos.splice(index, 1);
	// 	this.setState( { todos } );
	// }

	// handleFilter = (show) => {
	// 	this.setState( { show } );
	// }

	render() {
		return(
			<div className='App'>
				<Form
					handleChange={this.handleChange} 
					inputValue={this.state.inputValue} 
					handleSubmit={this.handleSubmit}
				/>
				<List 
					show={this.state.show}
					todos={this.state.todos}
					handleClick={this.handleClick}
					handleRemove={this.handleRemove}
				/>
				<Filter 
					handleFilter={this.handleFilter}
				/>
			</div>
		);
	}

	// 以下程式是用來連結 React 與 Redux
	refresh() {
		// 串接 Redux 的狀態改變，並觸發 React 組件的更新
		this.setState(store.getState());
	}

	componentDidMount() {
		// 當 Redux 的狀態有變化時，會呼叫refresh()
		this.unsubscribe = store.subscribe(this.refresh.bind(this));
	}

	componentWillUnmount() {
		// 清除連接點
		this.unsubscribe();
	}
}

export default App;