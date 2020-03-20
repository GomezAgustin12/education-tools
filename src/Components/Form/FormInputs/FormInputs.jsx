import React from 'react';
import './styles/styles.css';

const FormInputs = ({ subtitle, title, description, onChange }) => (
	<div className="form-container">
		<label>Title:</label>
		<input
			type="text"
			value={title}
			placeholder="Title"
			onChange={event => onChange('title', event.target.value)}
		/>
		<label>Sub Title:</label>
		<input
			type="text"
			value={subtitle}
			placeholder="Subtitle"
			onChange={event => onChange('subtitle', event.target.value)}
		/>
		<label>Description:</label>
		<textarea
			value={description}
			placeholder="Description"
			onChange={event => onChange('description', event.target.value)}
		/>
	</div>
);

export default FormInputs;
