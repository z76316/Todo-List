import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';

import Always from '../presentational/Always';
import A from '../presentational/A';
import B from '../presentational/B';
import C from '../presentational/C';


const Show = () => (
	<div>
		<Route path="/" component={Always} />
		<Route path="/A" component={A} />
		<Route path="/B" component={B} />
		<Route path="/C" component={C} />
	</div>
);


export default Show;