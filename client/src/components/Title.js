import React, { Component } from 'react';
import Clock from './Clock';
import { Row, Col } from 'react-bootstrap';
import chalkboard from './../images/chalkboard.svg';

import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';
import { HashLink } from 'react-router-hash-link';

export default class Title extends Component {
	componentDidMount() {
		let el = document.querySelector('.landing');
		setTimeout(() => {el.classList.add('fade-in')}, 0);
	}

	render() {
		return (
			<div className="landing landing--big container">
				<Clock/>
				<Row>
					<Col sm={12} md={8}>
						<div className="title__chalkboard">
							<div className="chalkboard__button">
								<HashLink to="/contact#sendmessage"><button className="landing__button">
									<Translate id="signup">Sign Up For Classes Here</Translate>
								</button></HashLink>
							</div>
						</div>
					</Col>

					<Col sm={12} md={4}>
						<div className="title__announcementboard">

						</div>

					</Col>
				</Row>



				
			</div>
		)
	}
}
