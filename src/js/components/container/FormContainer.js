import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import App from '../presentational/todo_list/App';

// import Head from '../presentational/Head';
// import Body from '../presentational/Body';

// import Input from '../presentational/Input';
// import Header from '../presentational/Header';
// import Selection from '../presentational/Selection';
// import Show from '../presentational/Show';

class FormContainer extends Component {
	constructor() {
		super();
		this.state = {
			title: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	render() {
		const { title } = this.state;
		return (			
			<App />
		);
	}
}

export default FormContainer;

const wrapper = document.getElementById('render_me');
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;