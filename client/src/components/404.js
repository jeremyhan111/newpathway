import React, { Component } from 'react';
import nyancat from './../images/nyancat.png';

class Four extends Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="container spacer">
				<h1>Sorry, that page was not found!</h1>
				<img id="nyancat" src={nyancat}/>
				<br/><br/>
				
			</div>
		)
	}
}

export default Four;