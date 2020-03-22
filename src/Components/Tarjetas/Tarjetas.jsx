import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

function Tarjetas({ image, title, subtitle, description, link }) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant='top' src={image} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Button href={link} target='_blank' variant='primary'>
					Go somewhere
				</Button>
			</Card.Body>
		</Card>
		// <Card
		// 	title={title}
		// 	subTitle={subtitle}
		// 	className='card'
		// 	footer={footer}
		// 	header={header}>
		// 	<div className='contenido'>{description}</div>
		// </Card>
	);
}

export default Tarjetas;
