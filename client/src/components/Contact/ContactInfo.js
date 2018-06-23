import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class ContactInfo extends Component {
	render() {
		return (
			<div className="container">
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<div className="contact__intro">
							<h4 className="contact__subheader contact__email"> newpathwayeducation@gmail.com</h4>
							<h4 className="contact__subheader contact__wechat"> newpathwayeducation</h4>
							<h4 className="contact__subheader contact__number"> 86-21-5432-5782</h4>
						</div>
					</Col>
				</Row>

			</div>
		)
	}
}

export default ContactInfo;