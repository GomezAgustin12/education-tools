import React from "react";
import "./AppStyles/App.css";
import { Navbar, Tarjetas } from "./Components";

function App() {
	return (
		<>
			<Navbar />
			<div className='app-container'>
				<div>
					<Tarjetas />
				</div>
				<div>
					<Tarjetas />
				</div>
				<div>
					<Tarjetas />
				</div>
			</div>
			<div className='app-container'>
				<div>
					<Tarjetas />
				</div>
				<div>
					<Tarjetas />
				</div>
				<div>
					<Tarjetas />
				</div>
			</div>
		</>
	);
}

export default App;
