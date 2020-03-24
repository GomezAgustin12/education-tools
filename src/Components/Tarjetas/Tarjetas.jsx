import React, { useEffect, useState } from "react";
// import { Card, Button } from "react-bootstrap";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./styles/styles.css";
import { url } from "./../../const";

function Tarjetas({ image, title, subtitle, description, link }) {
	const header = (
		<img src={`${url}${image}`} alt='Card' height='100' width='100' />
	);
	const footer = (
		<span>
			<a href={link} target='_blank' rel='noopener noreferrer'>
				<Button label='Site' />
			</a>
		</span>
	);
	return (
		<Card
			title={<h2>{title}</h2>}
			subTitle={<h3>{subtitle}</h3>}
			className='card'
			footer={footer}
			header={header}>
			{/* <div className='contenido'>{description}</div> */}
		</Card>
	);
}

export default Tarjetas;
