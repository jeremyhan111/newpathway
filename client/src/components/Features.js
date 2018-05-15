import React from 'react';
import { Row, Col } from 'react-bootstrap';

import pen from './../images/pen.svg';
import computer from './../images/computer.svg';
import abacus from './../images/abacus.svg';
import sqrrt from './../images/square-root.svg';

const Features = () => {
	return (
		<div className="container features">
			<Row>
				<Col sm={12} md={6} lg={3}>
					<div className="feature">
						<img className="feature__svg" src={pen}/>
						<h3><b>Experienced Teachers</b></h3>
						<p className="feature__description">
							Our teachers have years of teaching experience and are
							invested in their students' growth. Many of our teachers
							have Master's degrees or have experience teaching at other
							educational institutions.
						</p>
					</div>
				</Col>
				<Col sm={12} md={6} lg={3}>
					<div className="feature">
						<img className="feature__svg" src={computer}/>
						<h3><b>Proven Results</b></h3>
						<p className="feature__description">
							Our students score well on the exam. In the past five years, 
							we have had ___ students score in the top ____ of all the 
							test takers.
						</p>
					</div>
				</Col>
				<Col sm={12} md={6} lg={3}>
					<div className="feature">
						<img className="feature__svg" src={abacus}/>
						<h3><b>Flexibility</b></h3>
						<p className="feature__description">
							Our classes are designed to match your schedule. Come whenever
							you need help and we will be here to help you score higher. 
						</p>
					</div>
				</Col>
				<Col sm={12} md={6} lg={3}>
					<div className="feature">
						<img className="feature__svg" src={sqrrt}/>
						<h3><b></b></h3>
						<p className="feature__description">
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna 
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
							ullamco laboris nisi ut aliquip ex ea commodo consequat."
						</p>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Features;