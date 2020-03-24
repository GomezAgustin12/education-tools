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
			let i = 0;
			while (i < 3 && card) {
				return (
					<>
						<Grid item xs={3} spacing={2}>
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
			}
		});

		let result = [];

		for (let i = 0; i < a.length; i++) {
			for (let j = 0; j < 3; j++) {
				const aux = <Grid container>{a[i + j * 3]}</Grid>;
				result.push(aux);
			}
		}
		return result;
	};

	return <>{renderTarjetas()}</>;
}

export default Home;
