import React, { useEffect, useState } from "react";
import Tarjetas from "../Tarjetas/Tarjetas";
import axios from "axios";
import "./style.css";

// const url = "https://educacion-remota.herokuapp.com/";
const url = "http://localhost:4000/";

function OrdenTarjetas() {
	const [cards, setCards] = useState([{}]);

	useEffect(() => {
		const aux = async function() {
			const data = await axios.get(`${url}cards`);
			await setCards(data.data);
		};
		aux();
	}, []);

	const renderTarjetas = () => {
		const a = cards.map(card => {
			return (
				<>
					<Tarjetas
						image={card.image}
						title={card.title}
						subtitle={card.subtitle}
						description={card.description}
						link={card.link}
					/>
				</>
			);
		});
		return a;
	};

	return (
		<>
			<div className='app-container'>{renderTarjetas()}</div>
		</>
	);
}

export default OrdenTarjetas;
