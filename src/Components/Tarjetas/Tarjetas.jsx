import React, { useEffect, useState } from "react";
// import { Card, Button } from "react-bootstrap";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./styles/styles.css";

function Tarjetas({ image, title, subtitle, description, link }) {
	const header = <img src={image} alt='Card' height='100' width='100' />;
	const footer = (
		<span>
			<a href={link} target='_blank'>
				<Button label='Site' />
			</a>
		</span>
	);
	return (
		// <Card style={{ width: "18rem" }}>
		// 	<Card.Img
		// 		style={{ justifyContent: "center" }}
		// 		src={image}
		// 		width={150}
		// 		height={150}
		// 	/>
		// 	<Card.Body>
		// 		<Card.Title>{title}</Card.Title>
		// 		<Card.Text>{description}</Card.Text>
		// 		<Button href={link} target='_blank' variant='primary'>
		// 			Site
		// 		</Button>
		// 	</Card.Body>
		// </Card>
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
