import React, { useEffect, useState } from "react";
import Tarjetas from "../Tarjetas/Tarjetas";
import axios from "axios";
import "./style.css";

const url = "https://educacion-remota.herokuapp.com/";

function OrdenTarjetas() {
	const [cards, setCards] = useState();

	useEffect(() => {
		const aux = async function() {
			const data = await axios.get(`${url}cards`);
			setCards(data.data);
		};
		aux();
	}, []);
	let title = "";
	let subtitle = "";
	let description = "";
	let link = "";
	let image = "";

	for (const i in cards) {
		title = cards[i].title;
		subtitle = cards[i].subtitle;
		description = cards[i].description;
		link = cards[i].link;
		image = cards[i].image;
	}

	return (
		<>
			<div className='app-container'>
				<Tarjetas
					title={title}
					subtitle={subtitle}
					description={description}
					link={link}
					image={image}
				/>
				<Tarjetas
					title={title}
					subtitle={subtitle}
					description={description}
					link={link}
					image={image}
				/>
				<Tarjetas
					title={title}
					subtitle={subtitle}
					description={description}
					link={link}
					image={image}
				/>
			</div>
			<div className='app-container'>
				<Tarjetas
					title={title}
					subtitle={subtitle}
					description={description}
					link={link}
					image={image}
				/>
				<Tarjetas
					title={title}
					subtitle={subtitle}
					description={description}
					link={link}
					image={image}
				/>
				<Tarjetas
					title={title}
					subtitle={subtitle}
					description={description}
					link={link}
					image={image}
				/>
			</div>
		</>
	);
}

export default OrdenTarjetas;
