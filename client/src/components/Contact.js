import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

import FieldGroup from './FieldGroup';

class Contact extends Component {
	render() {
		return (
			<div className="container">
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<div className="contact__intro">
							<h1 className="contact__header">Contact Us</h1>
							<h4 className="contact__subheader"><b>Headquarters:</b> 25th Floor, No. 899, Lingling Road, Xuhui District, Shanghai</h4>
							<h4 className="contact__subheader"><b>WeChat:</b> newpathwayeducation</h4>
							<h4 className="contact__subheader"><b>General Inquiries:</b> 1-111-111-1111</h4>
						</div>
					</Col>
				</Row>

				<form>
					<h1>Send a message</h1>
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
							        <FormControl componentClass="textarea" placeholder="Leave a message..." />
							    </FormGroup>
							</Col>
						</Row>
					</Grid>

				    <Button className="link__button" id="contact__button" type="submit">Submit</Button>
				</form>
			</div>
		)
	};
}


export default Contact;