import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const Selection = () => (
	<div>
		<Link to="A"><button>A</button></Link>
		<Link to="B"><button>B</button></Link>
		<Link to="C"><button>C</button></Link>
	</div>
);


export default Selection;