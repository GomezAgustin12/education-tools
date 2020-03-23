import React, { useEffect, useState } from "react";
import Tarjetas from "../Components/Tarjetas/Tarjetas";
import axios from "axios";
import GridList from "@material-ui/core/GridList";
import { url } from "./../const";

function Home() {
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
			<GridList spacing={1}>{renderTarjetas()}</GridList>
		</>
	);
}

export default Home;
