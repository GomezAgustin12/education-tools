import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./styles/styles.css";

const FormInputs = ({
	subtitle,
	title,
	description,
	link,
	onChange,
	onSubmit,
	handleImageUpload
}) => {
	return (
		<form
			className='form-container'
			onSubmit={onSubmit}
			encType='multipart/form-data'>
			<label>Title:</label>
			<input
				type='text'
				value={title}
				placeholder='Title'
				onChange={event => onChange("title", event.target.value)}
			/>
			<label>Sub Title:</label>
			<input
				type='text'
				value={subtitle}
				placeholder='Subtitle'
				onChange={event => onChange("subtitle", event.target.value)}
			/>
			<label>Description:</label>
			<textarea
				value={description}
				placeholder='Description'
				onChange={event => onChange("description", event.target.value)}
			/>
			<label>Link:</label>
			<textarea
				value={link}
				placeholder='Link'
				onChange={event => onChange("link", event.target.value)}
			/>
			<label>Imagen:</label>
			<input
				type='file'
				name='image'
				onChange={event => handleImageUpload(event)}
			/>
			<button
				type='submit'
				className='form-button'
				onSubmit={() => onSubmit()}>
				Cargar
			</button>
		</form>
	);
};
export default FormInputs;
