import React from 'react';


const Test = (props) => {
	const style = {
		backgroundColor: props.color
	};

	return (
		<div className="test-container">
			<div style={style} className="test__title">
				{props.title}
			</div>
			<div className="test__description">
				{props.description}
			</div>
		</div>
	)
}

export default Test;