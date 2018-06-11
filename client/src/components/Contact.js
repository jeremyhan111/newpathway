import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

import FieldGroup from './FieldGroup';
import Locations from './Locations';

class Contact extends Component {
	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="contact__container">
				<h1 className="contact__header">Contact Us</h1>
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<div className="contact__intro">
							<h4 className="contact__subheader contact__email"> newpathwayeducation@gmail.com</h4>
							<h4 className="contact__subheader contact__wechat"> newpathwayeducation</h4>
							<h4 className="contact__subheader contact__number"> 86-21-5432-5782</h4>
						</div>
					</Col>
				</Row>

				<Locations/>

				<form className="contact__form">
					<h1 id="sendmessage">Send a message</h1>
					<Grid>
						<Row>
							<Col xs={12} md={8} mdOffset={2}>
								<FormGroup controlId="formControlsSelect">
							        <FormControl componentClass="select" placeholder="select">
							        	<option value="select">Reason for Contact</option>
							        	<option value="other">Class Signup</option>
							        	<option value="other">Consultation</option>
							        	<option value="other">Other</option>
							        </FormControl>
							    </FormGroup>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={4} mdOffset={2}>
								<FieldGroup
							        id="formControlsText"
							        type="text"
							        placeholder="First Name"
							    />
							</Col>
							<Col xs={12} md={4}>
							    <FieldGroup
							        id="formControlsText"
							        type="text"
							        placeholder="Last Name"
							    />
							</Col>
						</Row>

						<Row>
							<Col xs={12} md={4} mdOffset={2}>
							    <FieldGroup
							        id="formControlsEmail"
							        type="email"
							        placeholder="Email"
							    />
							</Col>
							<Col xs={12} md={4}>
							    <FieldGroup
							        id="formControlsText"
							        type="text"
							        placeholder="Phone Number"
							    />
							</Col>
						</Row>

						<Row>
							<Col xs={12} md={8} mdOffset={2}>
							    <FormGroup controlId="formControlsTextarea">
							        <FormControl componentClass="textarea" style={{ height: 150 }} placeholder="Leave a message..." />
							    </FormGroup>
							</Col>
						</Row>

						<Row xs={12} md={8} mdOffset={2}>
							<Button id="contact__button" type="submit">Submit</Button>
						</Row>

					</Grid>

				</form>
			</div>
		)
	};
}


export default Contact;