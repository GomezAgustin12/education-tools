import React, { useEffect, useState } from "react";
import Tarjetas from "../Components/Tarjetas/Tarjetas";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const url = "http://api.education-tools.404webs.com/";

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
			<Container>
				<Row md={3}>{renderTarjetas()}</Row>
			</Container>
		</>
	);
}

export default Home;
