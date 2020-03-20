import React from "react";
import { Tarjetas } from "./../index";

function Home() {
	return (
		<>
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

export default Home;
