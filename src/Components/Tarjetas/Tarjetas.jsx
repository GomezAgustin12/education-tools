import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import imagen from "./react.png";
import "./styles/styles.css";
import axios from "axios";

const url = "http://localhost:4000";

function Tarjetas() {
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
			title='Advanced Card'
			subTitle='Subtitle'
			style={{ width: "360px" }}
			className='card'
			footer={footer}
			header={header}>
			<div className='contenido'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Inventore sed consequuntur error repudiandae numquam deserunt
				quisquam repellat libero asperiores earum nam nobis, culpa
				ratione quam perferendis esse, cupiditate neque quas!
			</div>
		</Card>
	);
}

export default Tarjetas;
