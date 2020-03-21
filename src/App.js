import React from 'react';
import './AppStyles/App.css';
import { Navbar, Form } from './Components';
import { Home } from './views';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Route path="/" exact component={Home} />
				<Route path="/form" exact component={Form} />
			</Router>
		</>
	);
}

export default App;
