import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class EmailForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			contactReason: "classsignup",
			name: "",
			email: "", 
			phonenumber: "",
			message: ""
		}
		this.onSubmit = this.onSubmit.bind(this)
	}


	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	}

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	}

	onPhoneNumberChange = (e) => {
		const phonenumber = e.target.value;
		if (!phonenumber || phonenumber.match(/^[0-9]+$/)) {
			this.setState(() => ({ phonenumber }));
		}
	}

	onMessageChange = (e) => {
		const message = e.target.value;
		this.setState(() => ({ message }));
	}

	onSubmit = (e) => {
		e.preventDefault();
		
		if (!this.state.name || !this.state.email || !this.state.phonenumber || !this.state.message) {
			this.setState(() => ({error: 'Please fill in all the forms.'}))
		} else {
			this.setState(() => ({error: ""}));
			console.log("hello");
			axios.post('/api/email', {
				name: this.state.name,
				contactReason: this.state.contactReason,
				email: this.state.email,
				phonenumber: this.state.phonenumber,
				message: this.state.message
			})
			.then(function (response) {
			    console.log(response);
			})
			.catch(function (error) {
			    console.log(error);
			});
			console.log("bye");
		}
	}

	render() {
		return (
			<div>
				{this.state.error && <h3>{this.state.error}</h3>}
				<form onSubmit={this.onSubmit}>
					<h1 id="sendmessage">Send a message</h1>
					<Grid>
						<Row>
							<Col xs={12} md={8} mdOffset={2}>
								<select 
								  className="emailform__element"
								  value={this.state.contactReason}>
									<option value="select">Reason for Contact</option>
							        <option value="classsignup">Class Signup</option>
							        <option value="consultation">Consultation</option>
							        <option value="other">Other</option>
							    </select>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={8} mdOffset={2}>
								<input
									className="emailform__element"
									type="text"
									placeholder="Name"
									value={this.state.name}
									onChange={this.onNameChange}
								/>
							</Col>
						</Row>

						<Row>
							<Col xs={12} md={4} mdOffset={2}>
								<input
									className="emailform__element"
									type="text"
									placeholder="Email"
									value={this.state.email}
									onChange={this.onEmailChange}
								/>
							</Col>
							<Col xs={12} md={4}>
							 	<input
							 		className="emailform__element"
							 		type="number"
							 		placeholder="Phone Number"
							 		value={this.state.phonenumber}
							 		onChange={this.onPhoneNumberChange}
							 	/>
							</Col>
						</Row>

						<Row>
							<Col xs={12} md={8} mdOffset={2}>
								<textarea
									className="emailform__element emailform__element--tall"
									placeholder="Leave a message..."
									value={this.state.message}
									onChange={this.onMessageChange}
								/>
							</Col>
						</Row>

						<Row xs={12} md={8} mdOffset={2}>
							<Button id="contact__button" type="submit">Submit</Button>
						</Row>

					</Grid>

				</form>
			</div>
		)
	}

}

export default EmailForm;