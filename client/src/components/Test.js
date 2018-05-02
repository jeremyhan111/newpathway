import React from 'react';
import { Link } from 'react-router-dom';


const Test = (props) => {
	const style = {
		backgroundColor: props.color
	};

	return (
		<div className="test-container">
			<Link to={props.link}>
				<div style={style} className="test__title">
					{props.title}
				</div>
				<div className="test__description">
					{props.description}
				</div>
			</Link>
		</div>
	)
}

export default Test;