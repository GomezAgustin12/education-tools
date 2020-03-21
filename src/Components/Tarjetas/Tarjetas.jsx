import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import imagen from "./react.png";
import "./styles/styles.css";
import axios from "axios";

const url = "https://educacion-remota.herokuapp.com/";

function Tarjetas({ title, subtitle, description }) {
	const [cards, setCards] = useState([{}]);

	useEffect(() => {
		axios.get(`${url}/cards`).then(res => {
			setCards(res.data.data);
			console.log(cards);
			console.log(res.data.data);
		});
	}, []);

	const header = <img src={imagen} alt='Card' height='100' width='100' />;
	const footer = (
		<span>
			<Button label='Learn' />
			<a href='https://drive.google.com/drive/' target='_blank'>
				<Button label='Site' />
			</a>
		</span>
	);
	return (
		<Card
			title={title}
			subTitle={subtitle}
			className='card'
			footer={footer}
			header={header}>
			<div className='contenido'>{description}</div>
		</Card>
	);
}

export default Tarjetas;
