import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';


class Body extends Component {
	render() {
		return(
			<div id='loading'>
				<div className='loading_range'>
					<div className='loading_block1'>&#9683;</div>
					<div className='loading_block2'>&#9682;</div>
					<div className='loading_block3'>&#9680;</div>
				</div>
				<div className='loading_word'>Coming Up Soon ...</div>
			</div>
		);
	}
}

export default Body;