import React, { useState } from "react";
import FormInputs from "./FormInputs/FormInputs";
import FormImgInput from "./FormImg/FormImg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/styles.css";
import axios from "axios";

// const url = "https://educacion-remota.herokuapp.com/";
const url = "http://localhost:4000/";

const Form = () => {
	const notify = () => toast.success("Cargado!");
	const [formObject, setFormObject] = useState({});

	const onFormInputChange = (atribute, value) =>
		setFormObject({
			...formObject,
			[atribute]: value
		});

	const handleImageUpload = event => {
		setFormObject({ ...formObject, image: event.target.files[0] });
		console.log(event.target.files[0]);
	};

	const onSubmit = async () => {
		console.log(formObject.image);

		const fd = new FormData();
		fd.append("image", formObject.image);
		fd.set("data", JSON.stringify(formObject));
		fd.append("title", formObject.title);
		fd.append("subtitle", formObject.subtitle);
		fd.append("description", formObject.description);
		fd.append("link", formObject.link);
		const res = await axios.post(`${url}cards`, fd);
		console.log(res);

		notify();
	};

	return (
		<div className='form'>
			<ToastContainer autoClose='1000' hideProgressBar={true} />
			<FormInputs
				title={formObject.title}
				subtitle={formObject.subtitle}
				description={formObject.description}
				link={formObject.link}
				onChange={onFormInputChange}
				onSubmit={onSubmit}
				handleImageUpload={handleImageUpload}
			/>
			{/* <FormImgInput handleImageUpload={handleImageUpload} /> */}
		</div>
	);
};

export default Form;
