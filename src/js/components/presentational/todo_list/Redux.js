import { createStore } from 'redux';

let todos;

let reducer = function(state, action) {

	switch(action.type) {
	case 'HandleChange':
		return  Object.assign({}, state, {inputValue: action.inputValue});
		// 開一個空物件，初始化成 state 的形狀，把裡面的 inputValue 更新成 action.inputValue

	case 'HandleSubmit':
		let newTodo = {
			value: state.inputValue,
			done: false
		};
		todos = state.todos;
		todos.push(newTodo);
		return  Object.assign({}, state, {todos, inputValue: ''});

	case 'HandleClick':
		todos = state.todos;
		todos[action.index].done = !todos[action.index].done;
		return  Object.assign({}, state, {todos});

	case 'HandleRemove':
		todos = state.todos;
		todos.splice(action.index, 1);
		return  Object.assign({}, state, {todos});

	case 'HandleFilter':
		return  Object.assign({}, state, {show: action.show});

	default: 
		return state;
	}

};

const store = createStore(reducer, {
	inputValue: '',
	todos: [
		// { value: 'Clean the kitchen', done: false },
		// { value: 'Wash the car', done: true },
	],
	show: '',
});

export default store;