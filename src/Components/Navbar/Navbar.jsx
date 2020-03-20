import React from "react";
import "./style/style.css";

function Navbar() {
	return (
		<div className='topnav'>
			<a className='active' href='#home'>
				Home
			</a>
			<a href='#documentacion'>Documentacion</a>
			<a href='#contact'>Contacto</a>
		</div>
	);
}

export default Navbar;
