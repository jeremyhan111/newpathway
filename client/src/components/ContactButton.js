import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';

const ContactButton = () => {
	return (
		<div className="container">
			<Row className="show-grid row--spacing">
				<Col xs={12} md={12}>
					<div className="blurb">
						<Translate id="ready__blurb">
							Ready to improve your scores and get into your dream schools?
						</Translate>
					</div>
					<Link to="/contact"><button className="link__button">
						<Translate id="contact">
							Contact Us
						</Translate>
					</button></Link>
				</Col>
			</Row>
		</div>
	)
}

export default ContactButton;