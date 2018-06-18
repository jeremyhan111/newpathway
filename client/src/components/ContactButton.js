import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { Translate } from 'react-localize-redux';
import { HashLink } from 'react-router-hash-link';

const ContactButton = () => {
	return (
		<div className="container">
			<Row className="show-grid row--spacing">
				<Col xs={12} md={12}>
					<p className="blurb">
						<Translate id="ready__blurb">
							Ready to improve your scores and get into your dream schools?
						</Translate>
					</p>
					<HashLink to="/contact#sendmessage"><button className="link__button">
						<Translate id="contact">
							Contact Us
						</Translate>
					</button></HashLink>
				</Col>
			</Row>
		</div>
	)
}



export default ContactButton;