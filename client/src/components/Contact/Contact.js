import React, { Component } from 'react';
import Loadable from 'react-loadable';


const LoadableLocations = Loadable({
  	loader: () => import('./Locations'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableContactInfo = Loadable({
  	loader: () => import('./ContactInfo'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableEmailForm = Loadable({
  	loader: () => import('./EmailForm'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

class Contact extends Component {
	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="contact__container">
				<h1 className="contact__header">Contact Us</h1>
				
				<LoadableContactInfo/>
				<LoadableLocations/>
				<LoadableEmailForm/>

				
			</div>
		)
	};
}


export default Contact;