import React from 'react';

class Clock extends React.Component {
	render() {
		return (
			<div className="clock-container">
				<article className="clock simple show">
				    <div className="hours-container">
				    	<div className="hours"></div>
				    </div>
				    <div className="minutes-container">
				    	<div className="minutes"></div>
				    </div>
				    <div className="seconds-container">
				   		<div className="seconds"></div>
				    </div>
				</article>

			</div>
		)
	}
}

export default Clock;