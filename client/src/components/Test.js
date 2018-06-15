import React from 'react';
import { Link } from 'react-router-dom';


const Test = (props) => {
	const style = {
		backgroundColor: props.color
	};

	return (
		<div className="test-container">
			<Link to={props.link}>
				<h1 style={style} className="test__title">
					{props.title}
				</h1>
			</Link>
		</div>
	)
}

export default Test;