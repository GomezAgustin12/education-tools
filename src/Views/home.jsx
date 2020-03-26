import React, { useEffect, useState } from "react";
import Tarjetas from "../Components/Tarjetas/Tarjetas";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
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
					<Grid spacing={2}>
						<Tarjetas
							image={card.image}
							title={card.title}
							subtitle={card.subtitle}
							description={card.description}
							link={card.link}
						/>
					</Grid>
				</>
			);
		});
		return a;
	};

	return (
		<div className='home-container'>
			<Grid spacing={1} container>
				{renderTarjetas()}
			</Grid>
		</div>
	);
}

export default Home;
