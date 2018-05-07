import React from 'react';

import chalkboard from './../images/title.svg';

const PageIntro = (props) => {
	return (
		<div>
			<div className="intro">

				<img className="intro__chalkboard"src={chalkboard}/>
				<div className="intro__container">
					<h1 className="intro__title">{props.title}</h1>
					<p className="intro__description">{props.description}</p>
				</div>
			</div>
		</div>
	)
}

export default PageIntro;