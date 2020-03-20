import React, { useState } from 'react';
import './styles/styles.css';

const FormImgInput = ({ handleImageUpload }) => {
	const [showImg, setShowImg] = useState(false);
	const [imge, setImge] = useState(null);

	const getImg = element => {
		const file = element.target.files[0];
		const reader = new FileReader();

		if (file) {
			reader.addEventListener('load', () => {
				setImge(reader.result);
				setShowImg(true);
				handleImageUpload({
					file,
					base64string: reader.result
				});
			});

			reader.readAsDataURL(file);
		} else {
			setShowImg(false);
		}
	};
	return (
		<div className="form-img-container" showImg>
			<div className="preview-container">
				<img src={imge ? imge : ''} alt="Preview Image" />
				<div style={{ display: `${showImg ? 'none' : 'block'}` }}>preview</div>
			</div>

			<input type="file" name="inputFile" onChange={getImg} />
		</div>
	);
};

export default FormImgInput;
