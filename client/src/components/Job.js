import React from 'react';

const Job = (props) => {
	return (
		<div className="job">
			<a className="job__link" href={props.url}>
				<h3 className="job__title">{props.title}</h3>
				<h4 className="job__location">{props.location}</h4>
			</a>
		</div>
	)
}

export default Job;