import React, { Component } from 'react';

import Locations from './Locations';
import ContactInfo from './ContactInfo';
import EmailForm from './EmailForm';

class Contact extends Component {
	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="contact__container">
				<h1 className="contact__header">Contact Us</h1>
				
				<ContactInfo/>
				<Locations/>
				<EmailForm/>

				
			</div>
		)
	};
}


export default Contact;