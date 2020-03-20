import React, { useState } from 'react';
import FormInputs from './FormInputs/FormInputs';
import FormImgInput from './FormImg/FormImg';
import './styles/styles.css';

const Form = () => {
	const [formObject, setFormObject] = useState({});

	const onFormInputChange = (atribute, value) =>
		setFormObject({
			...formObject,
			[atribute]: value
		});

	const handleImageUpload = image => {
		setFormObject({ ...formObject, image });
	};

	return (
		<div className="form">
			<FormInputs
				title={formObject.title}
				subtitle={formObject.subtitle}
				description={formObject.description}
				onChange={onFormInputChange}
			/>
			<FormImgInput handleImageUpload={handleImageUpload} />
		</div>
	);
};

export default Form;
