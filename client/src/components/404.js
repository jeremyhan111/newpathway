import React, { Component } from 'react';
import nyancat from './../images/nyancat.png';

class Four extends Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="container">
				<h1>Sorry, that page was not found!</h1>
				<br/><br/>
				<img id="nyancat" src={nyancat}></img>
			</div>
		)
	}
}

export default Four;