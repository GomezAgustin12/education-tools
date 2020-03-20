import React, { useState } from "react";
import FormInputs from "./FormInputs/FormInputs";
import FormImgInput from "./FormImg/FormImg";
import "./styles/styles.css";
import axios from "axios";
const url = "https://educacion-remota.herokuapp.com/";

const Form = () => {
	const [formObject, setFormObject] = useState({});

	const onFormInputChange = (atribute, value) =>
		setFormObject({
			...formObject,
			[atribute]: value
		});

	const handleImageUpload = image => {
		setFormObject({ ...formObject, image });
		console.log(formObject);
	};
	const onSubmit = target => {
		axios.post(`${url}cards`, {
			title: formObject.title,
			subtitle: formObject.subtitle,
			description: formObject.description,
			link: formObject.link,
			image: formObject.image.base64string
		});
	};

	return (
		<div className='form'>
			<FormInputs
				title={formObject.title}
				subtitle={formObject.subtitle}
				description={formObject.description}
				link={formObject.link}
				onChange={onFormInputChange}
				onSubmit={onSubmit}
			/>
			<FormImgInput handleImageUpload={handleImageUpload} />
		</div>
	);
};

export default Form;
