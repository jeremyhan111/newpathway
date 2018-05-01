import React from 'react';

const PageIntro = (props) => {
	return (
		<div>
			<div className="intro">
				<h1 className="intro__title">{props.title}</h1>
				<p className="intro__description">{props.description}</p>
			</div>
		</div>
	)
}

export default PageIntro;