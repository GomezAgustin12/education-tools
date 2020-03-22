import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import imagen from "./react.png";
import "./styles/styles.css";

function Tarjetas({ image, title, subtitle, description, link }) {
	const header = <img src={image} alt='Card' height='100' width='100' />;
	const footer = (
		<span>
			<Button label='Learn' />
			<a href={link} target='_blank'>
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
