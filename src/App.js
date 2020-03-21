import React from "react";
import "./AppStyles/App.css";
import { Navbar, Home, Form } from "./Components";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Route path='/' exact component={Home} />
				<Route path='/form' exact component={Form} />
			</Router>
		</>
	);
}

export default App;
