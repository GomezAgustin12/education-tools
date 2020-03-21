import React, { useEffect, useState } from "react";
import OrdenTarjetas from "./../OrdenTarjetas/OrdenTarjetas";
import axios from "axios";

function Home() {
	return (
		<>
			<div>
				<OrdenTarjetas />
			</div>
		</>
	);
}

export default Home;
