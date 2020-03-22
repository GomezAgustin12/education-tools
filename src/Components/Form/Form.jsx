import React, { useState } from "react";
import FormInputs from "./FormInputs/FormInputs";
import FormImgInput from "./FormImg/FormImg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/styles.css";
import axios from "axios";

const url = "http://api.education-tools.404webs.com/";

const Form = () => {
	const notify = () => toast.success("Cargado!");
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

	const onSubmit = async () => {
		await axios.post(`${url}cards`, {
			title: formObject.title,
			subtitle: formObject.subtitle,
			description: formObject.description,
			link: formObject.link,
			image: formObject.image.base64string
		});
		notify();
	};

	return (
		<div className='form'>
			<ToastContainer autoClose='1000' hideProgressBar={true} />;
			<FormInputs
				title={formObject.title}
				subtitle={formObject.subtitle}
				description={formObject.description}
				link={formObject.link}
				onChange={onFormInputChange}
				onSubmit={onSubmit}
			/>
			<FormImgInput handleImageUpload={handleImageUpload} />
			<button
				className='form-button'
				onClick={event => onSubmit(event.target)}>
				Cargar
			</button>
		</div>
	);
};

export default Form;
