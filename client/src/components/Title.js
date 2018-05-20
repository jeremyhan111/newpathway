import React, { Component } from 'react';
import Clock from './Clock';
import chalkboard from './../images/chalkboard.svg';
import screen from './../images/projectorscreen.svg';
import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';

export default class Title extends Component {
	componentDidMount() {
		let el = document.querySelector('.landing');
		setTimeout(() => {el.classList.add('fade-in')}, 0);
	}

	render() {
		return (
			<div className="landing landing--big">
				<Clock/>
				<div className="title__container">	
					<h1 className="landing__title">New Pathway</h1>
				</div>
				<img className="title__screen" src={screen}/><br/>
				<img className="title__chalkboard" src={chalkboard}/>
				<h4 className="landing__subtitle"><Translate id="landing__subtitle">Teaching Lifelong Success</Translate></h4>

				<Link to="/contact"><button className="landing__button">
					<Translate id="signup">Sign Up For Classes Here</Translate>
				</button></Link>
			</div>
		)
	}
}
