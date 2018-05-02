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
						<p className="feature__description">
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna 
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
							ullamco laboris nisi ut aliquip ex ea commodo consequat."
						</p>
					</div>
				</Col>
				<Col sm={12} md={6} lg={3}>
					<div className="feature">
						<img className="feature__svg" src={computer}/>
						<p className="feature__description">
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna 
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
							ullamco laboris nisi ut aliquip ex ea commodo consequat."
						</p>
					</div>
				</Col>
				<Col sm={12} md={6} lg={3}>
					<div className="feature">
						<img className="feature__svg" src={abacus}/>
						<p className="feature__description">
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna 
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
							ullamco laboris nisi ut aliquip ex ea commodo consequat."
						</p>
					</div>
				</Col>
				<Col sm={12} md={6} lg={3}>
					<div className="feature">
						<img className="feature__svg" src={sqrrt}/>
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